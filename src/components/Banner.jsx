import libroLogo from "../assets/libroLogo2.png"

const Banner = () => {
  return (
    <section class="flex-center">
        <img src={libroLogo} alt=""/>
        <p class="principal">Tus libros favoritos</p>
    </section>
  )
}

export default Banner