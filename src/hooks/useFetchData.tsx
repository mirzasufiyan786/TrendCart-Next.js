import { useReducer, useEffect } from "react";
import axios from "axios";

interface StateType{
  data: Product[] | [],
  loading: boolean,
  error: string | null,
}

interface ActionType{
  type: "API_REQUEST" | "FETCH_DATA" | "ERROR",
  payload?: Product[],
  errorMessage?: string,
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category:string;
  image:string
}

const initialState: StateType = {
  data: [],
  loading: false,
  error: null,
};

function reducer(state:StateType, action:ActionType): StateType {
  switch (action.type) {
    case "API_REQUEST":
      return { ...state, data: [], loading: true, error: null };
    case "FETCH_DATA":
      return { ...state, data: action.payload!, loading: false, error: null };
    case "ERROR":
      return { ...state, data: [], loading: false, error:  action.errorMessage!};
    default:
      return state;
  }
}

function useFetch(url:string) {
  const [state, dispatch] = useReducer(reducer,initialState);
  
  useEffect(() => {
    dispatch({ type: "API_REQUEST" });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "FETCH_DATA", payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: "ERROR", errorMessage: e.message });
      });
  }, [url]);

  return state;
}

export default useFetch;
