import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

let token = cookies.get("token");

export default axios.create({
    baseURL: 'https://agricultiral.herokuapp.com',
    headers: {'Authorization': 'Bearer '+token}
});

// https://agricultiral.herokuapp.com

// http://localhost:8081