import './Header.css'

function Header() {
  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-prefix">Psic.</span>
          <span className="logo-name">Carlos Aguilera</span>
        </div>

        <nav className="nav">
          <a href="#sobre-mi" className="nav-link" onClick={(e) => handleScroll(e, 'sobre-mi')}>
            SOBRE MÍ
          </a>
          <a href="#libros" className="nav-link" onClick={(e) => handleScroll(e, 'libros')}>
            LIBROS
          </a>
          <a href="#conferencias" className="nav-link" onClick={(e) => handleScroll(e, 'conferencias')}>
            CONFERENCIAS
          </a>
          <a href="#contacto" className="nav-link" onClick={(e) => handleScroll(e, 'contacto')}>
            CONTACTO
          </a>
        </nav>

        <button className="cta-button" onClick={(e) => handleScroll(e, 'contacto')}>
          Agenda una llamada
        </button>
      </div>
    </header>
  )
}

export default Header
