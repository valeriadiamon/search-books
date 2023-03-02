import { Link } from "react-router-dom"
import noImage from "../assets/noImage.png"
import "./style.css"

const Book = ({data}) => {
  return (
    <div className="container">
      {data.map(item => (
        
      <div key={item.id} className="perspect">
        <Link to={`/libro/${item.id}`}>
        <div className="book">
          <div className="cover">
            <img src={ item.volumeInfo.imageLinks?.thumbnail
 || noImage} alt="" />
          </div>
        <div className="left-side">
          <h2>
            <span>{item.volumeInfo.title}</span>
          </h2>
        </div>
      </div>
      </Link>
    </div>
    
    ) )}
  </div>
  )
}

export default Book