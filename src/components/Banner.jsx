import libroLogo from "../assets/libroLogo2.png"

const Banner = () => {
  return (
    <section className="flex-center">
        <img src={libroLogo} alt=""/>
        <p className="principal">Tus libros favoritos</p>
    </section>
  )
}

export default Banner