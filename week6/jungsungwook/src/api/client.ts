import axios from "axios";

const appClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? "https://kuit-8th-mission-server.vercel.app"
});

export default appClient;
