import axios from 'axios';

import { loginModel } from '../interfaces/Login';

const API_URL = 'http://localhost:8250/api/v1/login';
const API_R_URL = 'http://localhost:8250/api/v1/register';

const login = async (username:any, password:any) => {
  const response = fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.status) {
        localStorage.setItem('token', response.data);
      } else {
        localStorage.setItem('token', 'null');
      }
    })
    .catch((err) => console.log(err));
  return response;
};

const logout = () => localStorage.removeItem('token');


const register = (loginData: loginModel) => {
  axios.post(API_R_URL,loginData);
};

const getCurrentUser = () => JSON.parse(localStorage.getItem('token')|| "");

const AuthService = {
  login,
  logout,
  register,
  getCurrentUser,
};

export default AuthService;
