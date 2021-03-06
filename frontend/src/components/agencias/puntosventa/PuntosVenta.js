import React, { useEffect, Fragment, useState, useContext } from "react";

import puntoventaContext from "../../../context/agencias/puntosventa/puntoventaContext";
import authContext from "../../../context/auth/authContext";

//Prime-React
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import classNames from "classnames";
import PuntosVentaForm from "./PuntosVentaForm";

import SidebarInactivar from "../../common/SidebarInactivar";
import TablasActionTemplate from "../../common/TablasActionTemplate";

function PuntosVenta(props) {
  const [sidebarState, setSideBarState] = useState({ visible: false });
  const [editar, setEditar] = useState(false);

  //Datatable State
  const [globalFilter, setglobalFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [filtroEstado, setFiltroEstado] = useState("true");
  const [expandedRows, setExpandedRows] = useState({});
  const [loadingData, setLoadingData] = useState(true);

  //local state
  const puntoventaCtx = useContext(puntoventaContext);
  const {
    puntosventa,
    mostrarFormulario,
    getPuntoVenta,
    setPuntoVenta,
    toggleEstadoPuntoVenta,
  } = puntoventaCtx;

  //auth state
  const authCtx = useContext(authContext);
  const { agencia } = authCtx;

  const setEstado = (data) => {
    setPuntoVenta(data);
    data.estado = !data.estado;
    toggleEstadoPuntoVenta(data);
  };

  const handleAgregar = () => {
    setEditar(false);
    setPuntoVenta({});
    mostrarFormulario();
  };

  const handleEditar = (dato) => {
    setPuntoVenta(dato);
    setEditar(true);
    mostrarFormulario();
  };

  const handleInhabilitar = (item) => {
    setSelectedItem(item);
    toggleSidebar();
  };

  const estadoTemplate = (rowData) => {
    return (
      <span
        className={classNames("customer-badge", "status-" + rowData.estado)}
      >
        {rowData.estado ? "ACTIVO" : "INACTIVO"}
      </span>
    );
  };

  const puntoventaTemplate = (rowData) => (
    <span>{rowData.punto_venta.toString().padStart(5, 0)}</span>
  );

  const actionTemplate = (rowData, column) => {
    return (
      <TablasActionTemplate
        //handleBorrar={handleBorrar}
        handleEditar={handleEditar}
        handleInhabilitar={handleInhabilitar}
        rowData={rowData}
      />
    );
  };

  const toggleSidebar = () => {
    setSideBarState({ visible: !sidebarState.visible });
  };

  let dt = React.createRef();

  const onEstadoChange = (event) => {
    dt.filter(event.value, "estado", "equals");
    setFiltroEstado(event.value);
  };

  const estados = [
    { label: "ACTIVOS", value: "true" },
    { label: "INACTIVOS", value: "false" },
    { label: "TODOS", value: null },
  ];

  const estadoFilter = (
    <Dropdown
      style={{ width: "100%" }}
      placeholder="ACTIVOS"
      value={filtroEstado}
      options={estados}
      onChange={onEstadoChange}
    />
  );

  useEffect(() => {
    setLoadingData(true);
    if (agencia) {
      getPuntoVenta(agencia.id);
      setLoadingData(false);
    }
  }, [agencia]);

  //Ejecuto el fitro estado para seleccionar los activos por defecto
  useEffect(() => {
    dt.filter(filtroEstado, "estado", "equals");
  }, []);

  return (
    <Fragment>
      <PuntosVentaForm editar={editar} />
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <h1>Puntos de Venta</h1>

            <SidebarInactivar
              texto={`¿Está seguro de ${
                selectedItem.estado ? "Inactivar" : "Activar"
              } este Punto de Venta?`}
              visible={sidebarState.visible}
              setEstado={setEstado}
              toggleSidebar={toggleSidebar}
              selectedItem={selectedItem}
            />

            <div style={{ textAlign: "right" }} className="p-col-12">
              <i
                className="pi pi-search"
                style={{ margin: "4px 4px 4px 8px" }}
              ></i>
              <InputText
                type="search"
                onInput={(e) => setglobalFilter(e.target.value)}
                placeholder="Buscar"
                size="50"
              />

              <Button
                style={{ margin: "4px 4px 4px 8px" }}
                label="Agregar"
                icon="pi pi-plus"
                className="p-button-success"
                onClick={() => handleAgregar()}
              />
            </div>
            <div className="datatable-doc-demo">
              <DataTable
                ref={(el) => (dt = el)}
                style={{ margin: "20px 0px 0px 0px" }}
                value={puntosventa}
                globalFilter={globalFilter}
                emptyMessage="No se encontraron registros"
                paginator={true}
                rows={25}
                rowsPerPageOptions={[5, 10, 25, 50]}
                className="p-datatable-customers"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                dataKey="id"
                responsive
              >
                <Column
                  field="punto_venta"
                  header="Punto Venta"
                  body={puntoventaTemplate}
                  sortable={true}
                  style={{ textAlign: "center" }}
                />
                <Column
                  field="descripcion"
                  header="Descripción"
                  sortable={true}
                />
                <Column
                  field="estado"
                  header="Estado"
                  body={estadoTemplate}
                  style={{ textAlign: "center", width: "14em" }}
                  filter={true}
                  filterElement={estadoFilter}
                />

                <Column
                  header="Acciones"
                  body={actionTemplate}
                  style={{ textAlign: "center", width: "12em" }}
                />
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PuntosVenta;
