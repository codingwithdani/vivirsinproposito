import './AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me" id="sobre-mi">
      <div className="about-me-container">
        <div className="about-me-image">
          <img
            src="/carlos.png"
            alt="Carlos Aguilera presentando en conferencia"
          />
        </div>

        <div className="about-me-content">
          <p className="about-me-label">SOBRE MÍ</p>

          <h2 className="about-me-title">
            Una trayectoria construida en el campo real
          </h2>

          <div className="about-me-text">
            <p>
              Comencé mi carrera en la industria petrolera, una de las entornos laborales más exigentes del país, donde diseñé e
              implementé programas de prevención e intervención de factores psicosociales. Fue ahí donde me especialicé en
              violencia y acoso laboral, no desde la teoría, sino desde la realidad de las organizaciones.
            </p>

            <p>
              Posteriormente, me desempeñé como consultor y capacitador para empresas en toda la República Mexicana,
              ayudando a líderes y equipos a construir culturas de comunicación efectiva y gestión genuina.
            </p>

            <p>
              Hoy, además de mi rol como Subdirector Regional en Qualitas —donde superviso el cumplimiento de la NOM-035—,
              dedico mi tiempo a escribir, conferenciar y acompañar a quienes buscan transformar sus entornos laborales y su
              vida personal.
            </p>
          </div>

          <div className="about-me-features">
            <div className="feature">
              <div className="feature-icon">🏭</div>
              <div className="feature-content">
                <h3 className="feature-title">Industria petrolera</h3>
                <p className="feature-description">
                  Prevención e intervención psicosocial en entornos de alta presión
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">💼</div>
              <div className="feature-content">
                <h3 className="feature-title">Consultoría empresarial</h3>
                <p className="feature-description">
                  Capacitación a líderes y equipos en México
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">📋</div>
              <div className="feature-content">
                <h3 className="feature-title">NOM-035</h3>
                <p className="feature-description">
                  Implementación y supervisión en entornos corporativos
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">✍️</div>
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
