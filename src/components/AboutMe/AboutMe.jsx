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
              Gran parte de mi trayectoria laboral transcurrió en entornos altamente exigentes, donde el desgaste emocional podía convertirse en parte de la rutina. Esta experiencia me permitió observar cómo muchas personas normalizamos formas sutiles de violencia para demostrar valor o sostener expectativas que, en el fondo, no siempre sentimos como propias.
            </p>

            <p>
              Desde entonces, mi trabajo ha girado alrededor de esta pregunta:
            </p>

            <p className="about-me-question">
              ¿Qué le ocurre al ser humano cuando vive constantemente obligado a resistir?
            </p>

            <p>
              Las personas no siempre se quiebran por falta de voluntad o capacidad. También pueden quebrarse por vivir demasiado tiempo bajo presión, tanto aquella que proviene del entorno como la que nace de la autoexigencia.
            </p>

            <p className="about-me-question">
              ¿Vale la pena asumir ese costo para mantener una versión idealizada de nosotros mismos?
            </p>

            <p>
              De esas preguntas nacieron mis libros. Y también la forma en que acompaño a personas y equipos: no desde las respuestas, sino desde la disposición a mirar más de cerca lo que preferimos no ver.
            </p>
          </div>

          <div className="about-me-features">
            <div className="feature">
              <div className="feature-content">
                <h3 className="feature-title">Con personas</h3>
                <p className="feature-description">
                  Acompañamiento individual para quienes están revisando creencias, decisiones o estilos de vida que ya no les satisfacen.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-content">
                <h3 className="feature-title">Con equipos y empresas</h3>
                <p className="feature-description">
                  Abordaje para identificar y resolver los puntos de fricción organizacional y de las dinámicas humanas.
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
