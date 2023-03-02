import { useEffect, useState, useRef } from "react"
import Book from "./Book"
import useFetcher from "../hooks/useFetcher"

const SearchBook = () => {
  const [book, setBook] = useState("el gato que amaba")
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
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputVal}/>
        <button >Submit</button>
      </form>

      {response == null ? <p>Cargando...</p> : <Book data={response} />}
    </div>
  )
}

export default SearchBook