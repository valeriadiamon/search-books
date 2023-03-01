const Navbar = () => {
  return (
    <header>
        <ul className="menu">
            <li>Inicio</li>
            <li>
                <input type="text" placeholder="Título, autor, ISBN"/>
                <button className="button search-button">Buscar</button>
            </li>
        </ul>
    </header>
  )
}

export default Navbar