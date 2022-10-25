import axios from "axios";

const TOKEN = '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';

export const instance = axios.create({
    baseURL: "https://api.github.com/",
    method: "GET",
    headers: {
        Authorization: `Bearer ${TOKEN}`
    },
});