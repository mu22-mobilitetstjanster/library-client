import { FormEvent, useState } from "react"

type submitHandler = (title: string, author: string) => void;
 
interface BookFormProps {
  onSubmit: submitHandler;
}

const BookForm = ({onSubmit}: BookFormProps) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(title, author);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Insert title..."
          value={title}
          onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input 
          type="text" 
          placeholder="Insert author..."
          value={author}
          onChange={e => setAuthor(e.target.value)} />
      </div>
      <button type="submit">Add new book</button>
    </form>
  )
}

export default BookForm;