import './Hero.css'

function Hero() {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            PSICÓLOGO · AUTOR · CONFERENCISTA
          </div>

          <h1 className="hero-title">
            Desafía tus creencias
            <br />
            <span className="hero-title-accent">Explora nuevas formas de vivir.</span>
          </h1>

          <p className="hero-description">
          Carlos Aguilera (Malavé) es autor, psicólogo y estratega creativo. Su trabajo integra pensamiento crítico, narrativa cultural y psicología aplicada para cuestionar mandatos sociales, explorar nuevas formas de existir y ofrecer herramientas frente a los desafíos humanos y organizacionales
          </p>

          <div className="hero-cta">
            <button className="btn-primary" onClick={() => handleScrollToSection('libros')}>
              Descubre mis libros
            </button>
            <button className="btn-secondary" onClick={() => handleScrollToSection('contacto')}>
              Colaboremos juntos
            </button>
          </div>

          <div className="hero-tags">
            <span className="tag">NOM-035</span>
            <span className="tag">Psicología organizacional</span>
            <span className="tag">Prevención de la violencia laboral</span>
            <span className="tag">Efectividad organizacional</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <picture>
              <source srcSet="/carlos-aguilera.webp" type="image/webp" />
              <img src="/carlos-aguilera.png" alt="Carlos Aguilera" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
