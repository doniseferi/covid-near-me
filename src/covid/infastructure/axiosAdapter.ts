import axios from "axios";
import httpClient from "./httpClient";

const client = httpClient(axios.get);
export default client;
