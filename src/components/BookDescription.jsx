import useFetcher from "../hooks/useFetcher"
import { useState, useEffect } from "react"
import { getBook } from "../utils/getData"
import { useParams } from "react-router-dom"

const BookDescription = () => {
  const param = useParams()
  const [response] = useFetcher(getBook,param.id)
  console.log(response?.volumeInfo.description)

  /*useEffect(() => {
    setDetail(response)
  }, [])*/
  

  
  return (
    
    <>
    <h1>Book descript</h1>
    <p>{response?.volumeInfo.description}</p>
    </>
    
  )
}

export default BookDescription