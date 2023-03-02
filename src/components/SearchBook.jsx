import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import Book from "./Book"
import useFetcher from "../hooks/useFetcher"

const SearchBook = () => {
  //const [book, setBook] = useState("el gato que amaba")
  //const inputVal = useRef()
  const param = useParams()
  //console.log(param.name)
  const [ response ] = useFetcher(param.name)
  
  

  /*const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputVal.current.value)
    setBook(inputVal.current.value)
    console.log(book)
  }*/
  return (
    <div>
      {response == null ? <p>Cargando...</p> : <Book data={response} />}
    </div>
  )
}

export default SearchBook