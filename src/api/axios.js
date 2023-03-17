import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

let token = cookies.get("token");

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {'Authorization': 'Bearer '+token}
});

// http://localhost:8080

// http://localhost:8081