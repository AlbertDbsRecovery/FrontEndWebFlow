
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080', // sau alt URL
});

// Interceptoare, token JWT etc.
API.interceptors.request.use((config) => {
  // Dacă avem token, îl punem în header.
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = async (email, password) => {
  // Ex: POST /auth/login
  const response = await API.post('/auth/login', { email, password });
  return response.data;
};

export const registerUser = async (formData) => {
  // Ex: POST /auth/register
  const response = await API.post('/auth/register', formData);
  return response.data;
};

// Alte servicii: getRoutes, getReports, etc.
