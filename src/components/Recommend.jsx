import elAmor from "../assets/elAmor.jpg"
import elGato from "../assets/elGato.jpg"
import orgulloypre from "../assets/orgulloypre.jpeg"

const Recommend = () => {
  return (
    <section className="info">
        <p>Nuestras recomendaciones</p>
        <div className="container">
            <div className="perspect">
                <div className="book">
                    <div className="cover">
                        <img src={orgulloypre} alt="" />
                    </div>
                    <div className="left-side">
                        <h2><span></span></h2>
                    </div>
                </div>
            </div>
    <div className="perspect">
      <div className="book">
        <div className="cover">
          <img src={elAmor} alt="" />
        </div>
        <div className="left-side">
          <h2>
            <span />
          </h2>
        </div>
      </div>
    </div>
    <div className="perspect">
      <div className="book">
        <div className="cover">
          <img src={elGato} alt="" />
        </div>
        <div className="left-side">
          <h2>
            <span />
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Recommend