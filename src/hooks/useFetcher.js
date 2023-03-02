import axios from "axios" 
import { useState, useEffect } from "react"

const useFetcher = (query) => {

  const [response,setResponse] = useState(null)

  const getBooks = async (query) => {
    return await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  }
  //se debe declarar la funcion fuera del useEffect porque sino se renderiza muchas veces pero se manda a llamar dentro 
  const getData = async () => {
    try{
      const {data : {items}} = await getBooks(query)
      setResponse(items)
    }
    catch(e){
      console.log("error")
    }
  }

  useEffect(() => {
    getData()
  },[query])

  return [ response ]
}
export default useFetcher