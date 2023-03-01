import axios from "axios"
import { useEffect, useState, useRef } from "react"

const useFetcher = (query) => {
    //const [dataState, setDataState] = useState()
  const [book,getBook] = useState(null)
  //const inputVal = useRef()

  const getBooks = async (query) => {
    return await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  }
  //se debe declarar la funcion fuera del useEffect porque sino se renderiza muchas veces pero se manda a llamar dentro 
  const getData = async (q) => {
    try{
      const {data : {items}} = await getBooks(q)
      getBook(items)
    }
    catch(e){
      getBook("Ocurrió un error obteniendo los datos")
    }
  }

  useEffect(() => {
    getData()
  },[])
  return { book }
}
export default useFetcher