const Navbar = () => {
  return (
    <header>
        <ul class="menu">
            <li>Inicio</li>
            <li>
                <input type="text" placeholder="Título, autor, ISBN"/>
                <button class="button search-button">Buscar</button>
            </li>
        </ul>
    </header>
  )
}

export default Navbar