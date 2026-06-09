import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleScroll = (e, targetId) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`)
      return
    }
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const redirect = (e) => {
    e.preventDefault()
    window.open('https://malavelico.substack.com/', '_blank')
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className="logo-prefix">Psic.</span>
          <span className="logo-name">Carlos A. Aguilera (Malavé)</span>
        </div>

        <nav className="nav">
          <a href="#sobre-mi" className="nav-link" onClick={(e) => handleScroll(e, 'sobre-mi')}>
            SOBRE MÍ
          </a>
          <a href="https://malavelico.substack.com/" className="nav-link" onClick={(e) => redirect(e)}>
            BLOG
          </a>
          <a href="#libros" className="nav-link" onClick={(e) => handleScroll(e, 'libros')}>
            LIBROS
          </a>
          <a href="#contacto" className="nav-link" onClick={(e) => handleScroll(e, 'contacto')}>
            CONTACTO
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
