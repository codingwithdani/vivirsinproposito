import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-prefix">Psic.</span>
          <span className="logo-name">Carlos Aguilera</span>
        </div>

        <nav className="nav">
          <a href="#sobre-mi" className="nav-link">SOBRE MÍ</a>
          <a href="#libros" className="nav-link">LIBROS</a>
          <a href="#conferencias" className="nav-link">CONFERENCIAS</a>
          <a href="#contacto" className="nav-link">CONTACTO</a>
        </nav>

        <button className="cta-button">
          Agenda una llamada
        </button>
      </div>
    </header>
  )
}

export default Header
