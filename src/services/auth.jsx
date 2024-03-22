import { useNavigate } from "react-router-dom";

const TOKEN_KEY = "authToken";

function setToken(token, local = false) {
  if (local) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
  }
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
}

function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
}

function useRequireAuth() {
  const navigate = useNavigate();
  const token = getToken();
  if (!token) {
    navigate("/login");
  }
  return token;
}

export { setToken, getToken, clearToken, useRequireAuth };
