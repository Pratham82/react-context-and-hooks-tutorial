import React, { useContext } from "react"
import { BookContext } from "../contexts/BookContext"

const Navbar = () => {
  const { books } = useContext(BookContext)
  return (
    <div className="navbar">
      <h1>Prathamesh's Reading List</h1>
      <p>
        You have <b>{books.length} </b> books to go through...
      </p>
    </div>
  )
}

export default Navbar
