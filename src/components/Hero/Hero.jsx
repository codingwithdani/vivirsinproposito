import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            PSICÓLOGO · AUTOR · CONFERENCISTA
          </div>

          <h1 className="hero-title">
            Transforma tu organización.
            <br />
            <span className="hero-title-accent">Transforma tu vida.</span>
          </h1>

          <p className="hero-description">
            Especialista en bienestar laboral, violencia organizacional y
            desarrollo humano. Más de una década acompañando a personas
            y empresas hacia ambientes de trabajo más sanos y productivos.
          </p>

          <div className="hero-cta">
            <button className="btn-primary">Conoce mis libros</button>
            <button className="btn-secondary">Contratar conferencia</button>
          </div>

          <div className="hero-tags">
            <span className="tag">NOM-035</span>
            <span className="tag">Psicología organizacional</span>
            <span className="tag">Prevención de la violencia laboral</span>
            <span className="tag">Efectividad organizacional</span>
          </div>
        </div>

        <div className="hero-image">
          <img src="/carlos-aguilera.png" alt="Carlos Aguilera" />
        </div>
      </div>
    </section>
  )
}

export default Hero
