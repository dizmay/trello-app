import axios from 'axios';
// import { FETCH_USER } from './SignupReducer';

export const fetchUserData = async (userData) => {
  return axios.post('http://localhost:8080/api/signup', userData)
}
