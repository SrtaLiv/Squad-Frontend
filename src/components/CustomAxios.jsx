// CustomAxios.js
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const authToken = localStorage.getItem("authToken");

const customAxios = axios.create({
  baseURL: "http://squad.ddns.net/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: authToken ? `Bearer ${authToken}` : "",
  },
});

// TODO: fix dis later aligater

// customAxios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Check if the error status is unauthorized
//     if (error.response && error.response.status === 401) {
//       // Unauthorized error, delete token and perform any other actions
//       localStorage.removeItem("authToken");
//       localStorage.removeItem("userdata");

//       // Redirect to the login page or perform other actions
//       const navigate = useNavigate(); // Note: You cannot use hooks inside an interceptor
//       navigate("/login");
//     }

//     return Promise.reject(error);
//   }
// );

export default customAxios;
