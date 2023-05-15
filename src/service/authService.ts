import axios from "axios";


const login = async (username: string, password: string) => {
  const resp = await axios.post("http://localhost:8080/auth/login", {username, password});
  sessionStorage.setItem("jwt-token", resp.data);
}

const authService = { login }
export default authService;