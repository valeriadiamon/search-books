import { Link } from "react-router-dom"
import elAmor from "../assets/elAmor.jpg"
import elGato from "../assets/elGato.jpg"
import orgulloypre from "../assets/orgulloypre.jpg"

const Recommend = () => {
  return (
    <section className="info">
        <p>Nuestras recomendaciones</p>
        <div className="container">
            <div className="perspect">
            <Link to={"/libro/AHSREAAAQBAJ"}>
                <div className="book">
                    <div className="cover">
                        <img src={orgulloypre} alt="" />
                    </div>
                    <div className="left-side">
                        <h2><span></span></h2>
                    </div>
                </div>
                </Link>
            </div>
    <div className="perspect">
    <Link to={"/libro/7Td4BwAAQBAJ"}>
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
      </Link>
    </div>
    <div className="perspect">
    <Link to={"/libro/mF9VEAAAQBAJ"}>
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
      </Link>
    </div>
  </div>
</section>

  )
}

export default Recommend