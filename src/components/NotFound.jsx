import notFound from "../assets/notFound.png"
import { Link } from "react-router-dom"
 
const NotFound = () => {
  return (
    <div className="flex-center flex-column">
        <h1 className="center">Oops! No pudimos encontrar la página que buscas</h1>
        <img src={notFound} />
        <Link to="/"><button className="button button-blue">Volver al inicio</button></Link>
    </div>
    
  )
}

export default NotFound