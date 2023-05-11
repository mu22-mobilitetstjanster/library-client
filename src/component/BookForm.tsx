import { useState } from "react"

interface BookFormProps {
  onSubmit: (author: string, title: string) => void;
}

const BookForm = ({onSubmit}: BookFormProps) => {
  const [author, setAuthor] = useState('');
  // title
  // TODO Gör så att denna form kan posta en ny bok till api:et på liknande sätt som delete tar bort en bok

  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" placeholder="Insert title..." />
      </div>
      <div>
        <label>Author</label>
        <input type="text" placeholder="Insert title..." />
      </div>
      <button type="submit">Add new book</button>
    </form>
  )
}