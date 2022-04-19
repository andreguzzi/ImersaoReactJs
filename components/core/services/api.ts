import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.imersaofx.danieldcs.com/",
    headers: {
        Authorization: "Bearer [YW5kcmVfZ3V6emlAaG90bWFpbC5jb20=]",
    },
});