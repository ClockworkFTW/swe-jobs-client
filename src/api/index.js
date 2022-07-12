import axios from "axios";

export const BASE_URL = "http://localhost:3005";

const API = axios.create({ baseURL: BASE_URL });

export default API;
