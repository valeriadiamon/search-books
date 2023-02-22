import noImage from "../assets/noImage.png"

const Book = ({data}) => {
  return (
    <div>
        {data.map(item => (
          <div key={item.id}>
            <img src={ item.volumeInfo?.imageLinks.smallThumbnail
 || noImage} alt="" />
            <p>{item.volumeInfo.title}</p>
          </div>
        ) )}
    </div>
  )
}

export default Book