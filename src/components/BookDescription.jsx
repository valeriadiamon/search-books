import useFetcher from "../hooks/useFetcher"
import { getBook } from "../utils/getData"
import { useParams } from "react-router-dom"

const BookDescription = () => {
  const param = useParams()
  const [response] = useFetcher(getBook,param.id)
  console.log(response)
  
  return (
    
    <>
    <h1>{response?.volumeInfo.title}</h1>
    <h3>{response?.volumeInfo.authors}</h3>
    <img src={response?.volumeInfo.imageLinks?.thumbnail} alt="" />
    <p>{response?.volumeInfo.description}</p>
    <p> <b>Número de páginas: </b> {response?.volumeInfo.pageCount}</p>
    </>
    
  )
}

export default BookDescription