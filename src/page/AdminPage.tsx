import axios from "axios";
import BookTable from "../component/BookTable";
import { useQueryBooks } from "../hook/bookApi";

const AdminPage = () => {
  const {books, isLoading, refreshBooks} = useQueryBooks('');

  const handleDelete = async (id: string) => {
    await axios.delete("http://localhost:8080/book/" + id);
    refreshBooks();
  }

  return (
    <>
      <h2>Admin page</h2>
      {isLoading && <p>Updating book information..</p>}
      <BookTable books={books} onDelete={handleDelete}/>
    </>
  )
}

export default AdminPage;