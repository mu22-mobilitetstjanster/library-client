  // TODO Gör en komponent som heter BookList (med books som en property) med innehållet från ul taggen. 
  // Om listan books är tom ska det istället stå "loading...".

import { Book } from "../model/book";

interface BookListProps {
  books: Array<Book>;
}

const BookList = ({books}: BookListProps) => {

  const bookElements = books.map(book => (
    <li>
      <p>Author: {book.author}</p>
      <p>Title: {book.title}</p>
    </li>
  ));

  if(books.length === 0) {
    return (<p>Loading...</p>)
  } else {
    return (<ul>{bookElements}</ul>);
  }
}

export default BookList;