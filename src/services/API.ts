import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://producao.aquabitfarm.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
