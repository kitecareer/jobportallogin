// apiService.js

import axios from "axios";

const API_BASE_URL = "http://192.168.1.140:5000/education"; // Replace with your actual API endpoint

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;
