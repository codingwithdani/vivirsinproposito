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
          <h1 className="hero-title">
            Desafía tus creencias.
            <br />
            <span className="hero-title-accent">Explora nuevas formas de vivir.</span>
          </h1>

          <p className="hero-description">
            Carlos A. Aguilera (Malavé) explora las ideas y creencias que influyen en nuestra forma de vivir. A través de sus libros y colaboraciones, invita a cuestionar aquello que solemos dar por cierto y a descubrir nuevas maneras de comprender los desafíos humanos.
          </p>

          <div className="hero-cta">
            <button className="btn-primary" onClick={() => handleScrollToSection('libros')}>
              Descubre mis libros
            </button>
            <button className="btn-secondary" onClick={() => handleScrollToSection('contacto')}>
              Colaboremos juntos
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <picture>
              <source srcSet="/carlos-aguilera.webp" type="image/webp" />
              <img src="/carlos-aguilera.png" alt="Carlos A. Aguilera (Malavé)" width="960" height="960" fetchPriority="high" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
