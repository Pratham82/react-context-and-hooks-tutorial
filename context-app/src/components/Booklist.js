import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { BookContext } from "../contexts/BookContext"

const Booklist = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  const { books } = useContext(BookContext)

  console.log(books)

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => (
          <li style={{ background: theme.ui }} key={book.id}>
            <b>{book.title}</b> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Booklist
