import { useEffect, useState } from "react"
import { Book } from "../model/book"
import axios from "axios";

const useQueryBooks = (query: string) => {
  const [books, setBooks] = useState([] as Array<Book>); 
  const [isLoading, setIsLoading] = useState(true);
  const [refreshState, setRefreshState] = useState(false);

  const refreshBooks = () => setRefreshState(true);

  useEffect(() => {
    setRefreshState(false);

    const timeoutId = setTimeout(async () => { 
      setIsLoading(true);
      let resp;
      if(query === '') {
        resp = await axios.get("http://localhost:8080/book/");
      } else {
        resp = await axios.get("http://localhost:8080/book/search/" + query);
      }

      setBooks(resp.data);
      setIsLoading(false);
    }, 2000);

 
    return () => clearTimeout(timeoutId);
  }, [query, refreshState]);

  return {books, isLoading, refreshBooks};
}

export { useQueryBooks };