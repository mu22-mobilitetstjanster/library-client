import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "../model/book";

const LibraryPage = () => {
  const [books, setBooks] = useState([] as Array<Book>);

  useEffect(() => {

    const fetchBooks = async () => {
      let resp = await axios.get("http://localhost:8080/book/");
      setBooks(resp.data);
    };

    fetchBooks();
  }, []);
  

  const bookElements = books.map(book => (
    <li>
      <p>Author: {book.author}</p>
      <p>Title: {book.title}</p>
    </li>
  ));

  return (
    <>
      <h2>Library page</h2>

      <ul>
        {bookElements}
      </ul>
    </>
  )
}

export default LibraryPage;