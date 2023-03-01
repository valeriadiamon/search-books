import axios from "axios"
import { useEffect, useState, useRef } from "react"
import Book from "./Book"

const SearchBook = () => {
  const [book,getBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const inputVal = useRef()

  const getBooks = async (query) => {
    return await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  }
  //se debe declarar la funcion fuera del useEffect porque sino se renderiza muchas veces pero se manda a llamar dentro 
  const getData = async (q) => {
    try{
      const {data : {items}} = await getBooks(q)
      getBook(items)
      setLoading(false)
    }
    catch(e){
      console.log("error")
    }
  }

  useEffect(() => {
    //getData()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputVal.current.value)
    getData(inputVal.current.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" ref={inputVal}/>
        <button >Submit</button>
      </form>

      {loading ? <p>Cargando...</p> : <Book data={book} />}
    </div>
  )
}

export default SearchBook