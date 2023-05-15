import axios from "axios";

const getAll = async () => {
  const headers = {
    "authorization": "Bearer " + sessionStorage.getItem('jwt-token')
  }

  let resp = await axios.get("http://localhost:8080/book/", { headers });
  return resp.data;
}


const bookService = { getAll };
export default bookService;