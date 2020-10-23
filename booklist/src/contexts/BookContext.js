import React, { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Deek Work", author: "Cal Newport", id: 0 },
    { title: "Principles", author: "Ray Dalio", id: 1 },
    { title: "Sapiens", author: "Yuval Noah Harari", id: 2 },
    { title: "Grit", author: "Angela Duckworth", id: 3 },
    { title: "Ikagai", author: "Hector Garcia", id: 4 },
  ])

  const addBook = (title, author) =>
    setBooks([...books, { title, author, id: uuidv4() }])

  const removeBook = (id) => setBooks(books.filter((book) => book.id !== id))

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
