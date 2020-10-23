import React, { useState, createContext } from "react"

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Deek Work", author: "Cal Newport", id: 0 },
    { title: "Principles", author: "Ray Dalio", id: 1 },
    { title: "Sapiens", author: "Yuval Noah Harari", id: 2 },
    { title: "Grit", author: "Angela Duckworth", id: 3 },
    { title: "Ikagai", author: "Hector Garcia", id: 4 },
  ])

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
