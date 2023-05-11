import { Book } from "../model/book"

type deleteHandler = (id: string) => void;

interface BookTableProps {
  books: Array<Book>;
  onDelete: deleteHandler;
}

const BookTable = ({books, onDelete}: BookTableProps) => {

  const bookElements = books.map(book => (
    <tr>
      <td>{book.id}</td>
      <td>{book.author}</td>
      <td>{book.title}</td>
      <td>
        <button onClick={() => onDelete(book.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Author</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bookElements}
      </tbody>
    </table>
  )
}

export default BookTable;