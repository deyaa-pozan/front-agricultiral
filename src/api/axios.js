import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

let token = cookies.get("token");

export default axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL_PRODUCTION||"https://backend-software.agritech4.net",
    headers: {'Authorization': 'Bearer '+token}
});

// http://localhost:8080

// http://localhost:8081
