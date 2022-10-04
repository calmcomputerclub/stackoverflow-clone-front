import axios from "axios";

const LOCALHOST = "http://localhost:8080";
const TARGET = "http://172.30.1.38:8080";

const client = axios.create({
  // baseURL: LOCALHOST,
  baseURL: TARGET,
});
export default client;
