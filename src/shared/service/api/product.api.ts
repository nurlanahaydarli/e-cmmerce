import axios from "axios";

const API_BASE_URL = "https://your-api-url.com/products";

export const ProductApi = {
    getAll: () => axios.get(API_BASE_URL),

    getById: (id: number | string) => axios.get(`${API_BASE_URL}/${id}`),
};