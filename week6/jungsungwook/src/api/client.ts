import axios from "axios";

const appClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ??  "https://localhost.3001"
});

export default appClient;