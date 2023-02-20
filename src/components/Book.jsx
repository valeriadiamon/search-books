const Book = ({data}) => {
  return (
    <div>
        {data.map(item => (
          <div key={item.id}>
            <p>{item.volumeInfo.title}</p>
          </div>
        ) )}
    </div>
  )
}

export default Book