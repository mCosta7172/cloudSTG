//types
import {
  SHOW_FORM,
  GET,
  DELETE,
  ADD,
  UPDATE,
  SET,
  GET_PUNTOVENTA,
  UPDATE_PUNTOVENTA,
} from "../../../types/crud";

export default (state, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        showForm: !state.showForm,
      };
    case SET:
      return {
        ...state,
        comprobante: action.payload,
      };
    case GET:
      return {
        ...state,
        comprobantes: action.payload,
      };
    case DELETE:
      return {
        ...state,
        comprobantes: state.comprobantes.filter(
          (comp) => comp.id !== action.payload
        ),
      };
    case ADD:
      return {
        ...state,
        comprobantes: [...state.comprobantes, action.payload],
        showForm: false,
      };
    case UPDATE:
      return {
        ...state,
        comprobantes: state.comprobantes.map((comp) =>
          comp.id === action.payload.id ? action.payload : comp
        ),
        showForm: false,
      };
    case GET_PUNTOVENTA:
      return {
        ...state,
        puntosVenta_Comprobante: action.payload,
      };
    case UPDATE_PUNTOVENTA:
      return {
        ...state,
        puntosVenta_Comprobante: state.puntosVenta_Comprobante.map((comp) =>
          comp.id === action.payload.id ? action.payload : comp
        ),
      };
    default:
      return state;
  }
};
