import axios from "axios";

const SERVER_ADDRESS = "https://api.github.com/";

export const instance = axios.create({
    baseURL: SERVER_ADDRESS,
    method: "GET",
});