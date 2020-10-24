import React, { createContext, useReducer, useEffect } from "react"
import { bookReducer } from "../reducers/bookReducer"

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(
    bookReducer,
    [
      { title: "Deek Work", author: "Cal Newport", id: 0 },
      { title: "Principles", author: "Ray Dalio", id: 1 },
      { title: "Sapiens", author: "Yuval Noah Harari", id: 2 },
      { title: "Grit", author: "Angela Duckworth", id: 3 },
      { title: "Ikagai", author: "Hector Garcia", id: 4 },
    ],
    () => {
      const localBooks = localStorage.getItem("books")
      return localBooks ? JSON.parse(localBooks) : []
    }
  )

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
