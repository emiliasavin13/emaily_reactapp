import { FETCH_USER } from "../actions/types";

export default function (state = {}, action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_USER:
      return null;
    default:
      return state;
  }
}
