import {useState, useRef } from "react"
import Book from "./Book"
import useFetcher from "../hooks/useFetcher"

const SomeBooks = () => {
  const [book, setBook] = useState("inteligencia")
  const inputVal = useRef()
  const [ response ] = useFetcher(book)
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputVal.current.value)
    setBook(inputVal.current.value)
    console.log(book)
  }
  return (
    <div>
    <h1>Libros</h1>
      {response == null ? <p>Cargando...</p> : <Book data={response} />}
    </div>
  )
}

export default SomeBooks