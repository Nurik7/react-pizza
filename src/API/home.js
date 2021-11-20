import axios from "axios";

export const getPizzas = async () => {
  return await axios.get("http://localhost:3000/db.json");
};
