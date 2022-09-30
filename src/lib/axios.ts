import axios from "axios";

const LOCALHOST = "http://localhost:8080";

const client = axios.create({
  baseURL: LOCALHOST,
});
export default client;
