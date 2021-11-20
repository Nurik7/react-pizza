import { SET_PIZZAS } from "../actions/types";

const initialState = {
  pizzas: [],
};

const home = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PIZZAS:
      return {
        ...state,
        pizzas: [...payload],
      };
    default:
      return state;
  }
};

export default home;
