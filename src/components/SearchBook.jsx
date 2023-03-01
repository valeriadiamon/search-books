import { useState, useRef } from "react"
import useFetcher from "../hooks/useFetcher"
import Book from "./Book"

const SearchBook = () => {
  const [query, setQuery] = useState('el amor')
  const { book: consulta } = useFetcher(query)
  const inputVal = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputVal.current.value)
    setQuery(inputVal.current.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" ref={inputVal}/>
        <button >Submit</button>
      </form>

      {consulta == null ? <p>Cargando...</p> : <Book data={consulta} />}
    </div>
  )
}

export default SearchBook