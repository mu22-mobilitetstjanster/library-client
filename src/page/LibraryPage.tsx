import { useState } from "react";
import BookList from "../component/BookList";
import { useQueryBooks } from "../hook/bookApi";

const LibraryPage = () => {
  const [query, setQuery] = useState('');
  const {books, isLoading} = useQueryBooks(query);

  return (
    <>
      <h2>Library page</h2>

      <input 
        type="text" 
        placeholder="Search book by author or title..."
        value={query}
        onChange={event => setQuery(event.target.value)} />
      {(isLoading && <p>Loading...</p>) || <BookList books={books}/> }
    </>
  )
}

export default LibraryPage;