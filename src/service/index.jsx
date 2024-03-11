import axios from "axios";
import { QueryClient } from "react-query";

export const API = axios.create({
    baseURL: 'http://localhost:8800/'
});

export const queryClient = new QueryClient();