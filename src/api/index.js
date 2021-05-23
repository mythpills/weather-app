import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const getManagers = async () => {
  return axios.get(BASE_URL);
};
