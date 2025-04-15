// src/service/api/axiosInstance.ts
import axios from 'axios';

 const authCredentials = {
    username: 'Goldgroup',
    password: 'goldgroup-211',
};
const { username, password } = authCredentials;
const encodedCredentials = btoa(`${username}:${password}`);

export const axiosInstance = axios.create({
    baseURL: 'https://goldgroup.cubicsbms.com/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`,
    },
});

// Optionally add interceptors for request/response handling
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify or log the request here if needed
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response.data, // Extract only the data
    (error) => {
        // Handle errors globally if needed
        console.error('API error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);
