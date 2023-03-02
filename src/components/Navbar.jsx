//import SearchBook from "./SearchBook"
import { Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import SearchBook from "./SearchBook"

const Navbar = () => {

  /*
  const [book, setBook] = useState("")
  const inputVal = useRef()
  const navigate = useNavigate();

  const inputChange = () => {
    setBook(inputVal.current.value)
    console.log(book)
  }

  const handleSubmit = async (e) => { 
    e.preventDefault()
    navigate("/search",book)
    e.target.reset()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setBook(inputVal.current.value)
    e.target.reset()
  }*/
  

  const [book, setBook] = useState("")
  const inputVal = useRef()

  const inputChange = () => {
    setBook(inputVal.current.value)
    console.log(book)
  }

  /*const handleSubmit = async (e) => {
    e.preventDefault()
    setBook(inputVal.current.value)
    e.target.reset()
  }*/
  return (
    <>
    <header>
        <ul className="menu">
            <Link style={{textDecoration:"none"}} to="/"><li>Inicio</li></Link>
            <li>
            <form>
              <input onChange={inputChange} type="text" placeholder="Título, autor, ISBN" ref={inputVal}/>
              <Link to={`/search/${book}`}><button className="button search-button">Buscar</button></Link>
            </form>
            </li>
        </ul>
        
    </header>
    
    </>
  )
}

export default Navbar