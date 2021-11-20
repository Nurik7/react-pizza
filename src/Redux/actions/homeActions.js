import { getPizzas as getPizzasAPI } from "../../API/home";
import { SET_PIZZAS } from "./types";

export const setPizzas = () => async (dispatch) => {
  const response = await getPizzasAPI();
  dispatch({
    type: SET_PIZZAS,
    payload: response.data.pizzas
  });
};
