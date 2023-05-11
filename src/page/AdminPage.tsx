import axios from "axios";
import BookTable from "../component/BookTable";
import { useQueryBooks } from "../hook/bookApi";
import BookForm from "../component/BookForm";

const AdminPage = () => {
  const {books, isLoading, refreshBooks} = useQueryBooks('');

  const handleDelete = async (id: string) => {
    await axios.delete("http://localhost:8080/book/" + id);
    refreshBooks();
  }

  const handleSubmitBook = async (title: string, author: string) => {
    await axios.post("http://localhost:8080/book/", {title, author});
    refreshBooks();
  }

  return (
    <>
      <h2>Admin page</h2>
      {isLoading && <p>Updating book information..</p>}
      <BookForm onSubmit={handleSubmitBook} />
      <BookTable books={books} onDelete={handleDelete}/>
    </>
  )
}

export default AdminPage;