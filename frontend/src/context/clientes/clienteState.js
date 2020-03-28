import React, { useReducer, useContext } from "react";
import axios from "axios";

import clienteContext from "./clienteContext";
import clienteReducer from "./clienteReducer";

import authContext from "../auth/authContext";
import globalContext from "../global/globalContext";

//types
import {
  SHOW_FORM_CLIENTE,
  GET_CLIENTES,
  DELETE_CLIENTE,
  ADD_CLIENTE,
  UPDATE_CLIENTE,
  SET_CLIENTE,
  TOGGLE_ESTADO
} from "../../types/clientes";

const ClienteState = props => {
  const initialState = {
    clientes: [],
    cliente: {},
    showForm: false
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(clienteReducer, initialState);

  //auth state
  const authCtx = useContext(authContext);
  const { tokenConfig } = authCtx;

  //global state
  const GlobalCtx = useContext(globalContext);
  const { showMessage } = GlobalCtx;

  //Funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: SHOW_FORM_CLIENTE
    });
  };

  const setCliente = cliente => {
    dispatch({
      type: SET_CLIENTE,
      payload: cliente
    });
  };

  //GET
  const getClientes = () => {
    axios
      .get("/api/clientes/", tokenConfig())
      .then(res => {
        dispatch({
          type: GET_CLIENTES,
          payload: res.data
        });
      })
      .catch(err => console.log(err.response.statusText));
  };

  //DELETE
  const deleteCliente = codigo => {
    axios
      .delete(`/api/clientes/${codigo}/`, tokenConfig())
      .then(res => {
        //dispatch(createMessage({ deleteProvincia: "Provincia Borrada" }));
        dispatch({
          type: DELETE_CLIENTE,
          payload: codigo
        });
        //dispatch(returnNoErrors());
      })
      .catch(
        err => {
          console.log(err.response);
          //alert.error(err.response.data.codigo[0]);
        }
        //dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

  //ADD
  const addCliente = cliente => {
    const miCliente = {
      codigo: cliente.codigo,
      localidad: cliente.localidad,
      provincia_codigo: cliente.provincia.codigo
    };
    axios
      .post("/api/clientes/", miCliente, tokenConfig())
      .then(res => {
        //dispatch(returnNoErrors());
        //dispatch(createMessage({ addProvincia: "Provincia Agregada" }));
        dispatch({
          type: ADD_CLIENTE,
          payload: res.data
        });
      })
      .catch(
        err => {
          console.log(err.response.data.codigo[0]);
        }
        //dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

  //UPDATE
  const updateCliente = cliente => {
    const miCliente = {
      codigo: cliente.id,
      localidad: cliente.localidad,
      provincia_codigo: cliente.provincia.codigo
    };
    axios
      .put(`/api/codigospostales/${cliente.id}/`, miCliente, tokenConfig())
      .then(res => {
        //dispatch(returnNoErrors());
        //dispatch(createMessage({ addProvincia: "Provincia Agregada" }));
        dispatch({
          type: UPDATE_CLIENTE,
          payload: cliente
        });
      })
      .catch(
        err => console.log(err.response.data.detail)
        //dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

  //Cambio a inactivo
  const toggleEstadoCliente = cliente => {
    axios
      .patch(
        `/api/clientes/${cliente.id}/`,
        { estado: cliente.estado },
        tokenConfig()
      )
      .then(res => {
        dispatch({
          type: TOGGLE_ESTADO,
          payload: cliente
        });

        if (!cliente.estado) {
          showMessage({
            msg: "Cliente inactivado.",
            title: "Clientes",
            type: "warn"
          });
        } else {
          showMessage({
            msg: "Cliente activado.",
            title: "Clientes",
            type: "success"
          });
        }
      })
      .catch(err =>
        showMessage({
          msg: err.response.data.detail,
          title: "Error",
          type: "error"
        })
      );
  };

  return (
    <clienteContext.Provider
      value={{
        cliente: state.cliente,
        clientes: state.clientes,
        showForm: state.showForm,
        mostrarFormulario,
        getClientes,
        addCliente,
        deleteCliente,
        updateCliente,
        setCliente,
        toggleEstadoCliente
      }}
    >
      {props.children}
    </clienteContext.Provider>
  );
};

export default ClienteState;