import axios from "axios";
// import { useNavigate } from 'react-router-dom';

const authToken = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

const axiosApi = axios.create({
  baseURL: "http://squad.ddns.net/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Authorization": authToken ? `Bearer ${authToken}` : "",
  },
});

export default axiosApi;
