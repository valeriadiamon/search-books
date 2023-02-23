import noImage from "../assets/noImage.png"
import "./style.css"

const Book = ({data}) => {
  return (
    <div className="container">
      {data.map(item => (
      <div key={item.id} className="perspect">
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
    </div>
    ) )}
  </div>
  )
}

export default Book