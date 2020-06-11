import api_axios from "../api/api_axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const response = await api_axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response });
};
