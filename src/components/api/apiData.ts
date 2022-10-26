import axios from "axios";

const SERVER_ADDRESS = "https://api.github.com/";
const API_TOKEN = "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";

export const instance = axios.create({
    baseURL: "https://api.github.com/",
    method: "GET",
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    },
});