import React, { useContext } from "react"
import { BookContext } from "../contexts/BookContext"
import BookDetails from "./BookDetails"

const BookList = () => {
  const { books } = useContext(BookContext)

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <BookDetails book={book} />
          </div>
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read curretly</div>
  )
}

export default BookList
