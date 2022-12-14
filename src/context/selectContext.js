import { createContext, useReducer } from "react";

export const SelectDataContext = createContext();

const SelectData = {
  line: "",
  hobby: "",
  friendCall: 0,
  spicy: 0,
  time: 0,
  IE: "",
  TF: "",
  JP: "",

  datingPlace: "",
  kidneyMinimum: 0,
  meal: "",
  coupleCall: 0,
  anniversary: 0,
  stlye: 0,
  impression: "",
  fight: 0,
  arguement: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "friend":
      // eslint-disable-next-line
      switch (action.idx) {
        case "1":
          return { ...state, line: action.id };
        case "2":
          return { ...state, hobby: action.id };
        case "3":
          return { ...state, friendCall: action.id };
        case "4":
          return { ...state, IE: action.id };
        case "5":
          return { ...state, TF: action.id };
        case "6":
          return { ...state, JP: action.id };
        case "7":
          return { ...state, spicy: action.id };
        case "8":
          return { ...state, time: action.id };
        case "9":
          return { ...state };
        default:
          return state;
      }
    case "couple":
      switch (action.idx) {
        case "1":
          return { ...state, datingPlace: action.id };
        case "2":
          return { ...state, kidneyMinimum: action.id };
        case "3":
          return { ...state, meal: action.id };
        case "4":
          return { ...state, coupleCall: action.id };
        case "5":
          return { ...state, anniversary: action.id };
        case "6":
          return { ...state, stlye: action.id };
        case "7":
          return { ...state, impression: action.id };
        case "8":
          return { ...state, IE: action.id };
        case "9":
          return { ...state, TF: action.id };
        case "10":
          return { ...state, JP: action.id };
        case "11":
          return { ...state, fight: action.id };
        case "12":
          return { ...state };
        default:
          return state;
      }
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, SelectData);

  return <SelectDataContext.Provider value={{ state, dispatch }}>{children}</SelectDataContext.Provider>;
};

export default ContextProvider;
