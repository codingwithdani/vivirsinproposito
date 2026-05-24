import './AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me" id="sobre-mi">
      <div className="about-me-container">
        <div className="about-me-image">
          <picture>
              <source srcSet="/carlos.webp" type="image/webp" />
              <img src="/carlos.png" alt="Carlos A. Aguilera (Malavé) presentando en conferencia" />
            </picture>
        </div>

        <div className="about-me-content">
          <p className="about-me-label">SOBRE MÍ</p>

          <h2 className="about-me-title">
            Una mirada crítica construida desde la experiencia
          </h2>

          <div className="about-me-text">
            <p>
              Durante años trabajé en algunos de los entornos laborales más exigentes del país. Ahí descubrí algo que rara vez se dice abiertamente: muchas personas no se quiebran por falta de capacidad, sino por vivir demasiado tiempo bajo presión, miedo o desgaste emocional.
            </p>

            <p>
              Desde entonces, mi trabajo ha girado alrededor de una misma pregunta:
            </p>

            <p className="about-me-question">
              ¿Qué le ocurre al ser humano cuando vive constantemente obligado a resistir?
            </p>

            <p>
              A veces esa presión proviene de organizaciones violentas.
              Otras veces nace de la necesidad de demostrar valor, encontrar propósito o sostener una versión idealizada de uno mismo.
            </p>

            <p>
              Como psicólogo, consultor y autor, exploro ambas dimensiones a través de conferencias, libros y espacios de reflexión que combinan experiencia, pensamiento crítico y exploración humana.
            </p>
          </div>

          <div className="about-me-features">
            <div className="feature">
              <div className="feature-content">
                <h3 className="feature-title">Consultoría personal y empresarial</h3>
                <p className="feature-description">
                  Capacitación a líderes y equipos en México
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-content">
                <h3 className="feature-title">Autor publicado</h3>
                <p className="feature-description">
                  Dos libros sobre bienestar, propósito y violencia organizacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
