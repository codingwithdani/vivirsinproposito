import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './VivirSinProposito.css'

function VivirSinProposito() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="vsp-page">

        {/* Hero del libro */}
        <section className="vsp-hero">
          <div className="vsp-hero-container">
            <div className="vsp-hero-image">
              <div className="vsp-badge">NUEVO</div>
              <picture>
                <source srcSet="/VivirSinProposito.webp" type="image/webp" />
                <img src="/VivirSinProposito.jpg" alt="Portada del libro Vivir sin Propósito" />
              </picture>
            </div>

            <div className="vsp-hero-content">
              <p className="vsp-category">DESARROLLO PERSONAL · FILOSOFÍA DE VIDA</p>
              <h1 className="vsp-title">
                ¿Y si realmente no es necesario tener un Propósito para ser feliz?
              </h1>
              <p className="vsp-author">Carlos A. Aguilera (Malavé)</p>

              <p className="vsp-intro">
                Vivimos bombardeados por la idea de que debemos tener un gran propósito, dejar un legado y trascender. Pero, ¿qué pasa si esa presión es, en sí misma, lo que te impide vivir plenamente?
              </p>

              <div className="vsp-cta-group">
                <a
                  href="https://siglantana.com/producto/vivir-sin-proposito/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vsp-btn-primary"
                >
                  Quiero este libro →
                </a>
                <button className="vsp-btn-secondary" onClick={() => navigate('/#contacto')}>
                  Contactar al autor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* De qué trata */}
        <section className="vsp-about">
          <div className="vsp-section-container">
            <p className="vsp-label">DE QUÉ TRATA</p>
            <h2 className="vsp-section-title">Un libro que desafía lo que creemos saber sobre la felicidad</h2>
            <div className="vsp-about-grid">
              <p>
                Desde que somos pequeños, el mundo nos dice que necesitamos un propósito. Una misión. Un legado. Y si no lo tienes, algo está mal en ti.
              </p>
              <p>
                Este libro propone algo diferente: que esa búsqueda constante de sentido puede ser, paradójicamente, lo que más nos aleja de vivir. No es un llamado a la pasividad ni al nihilismo. Es una invitación a explorar qué ocurre cuando soltamos la presión de tener que ser alguien.
              </p>
              <p>
                A través de personajes icónicos de la cultura popular, reflexiones filosóficas y psicología aplicada, Carlos A. Aguilera (Malavé) construye un diálogo íntimo que abre posibilidades en lugar de cerrarlas.
              </p>
            </div>
          </div>
        </section>

        {/* Lo que encontrarás */}
        <section className="vsp-features">
          <div className="vsp-section-container">
            <p className="vsp-label">LO QUE ENCONTRARÁS</p>
            <h2 className="vsp-section-title">Cuatro ideas que cambian la forma de habitarte</h2>
            <div className="vsp-features-grid">
              <div className="vsp-feature-card">
                <div className="vsp-feature-number">01</div>
                <h3>Cuestiona los mandatos culturales</h3>
                <p>Descubre cómo el discurso del éxito y el significado opera como una trampa invisible que muchos no logran ver hasta que el agotamiento los detiene.</p>
              </div>
              <div className="vsp-feature-card">
                <div className="vsp-feature-number">02</div>
                <h3>Nuevas formas de habitar tu vida</h3>
                <p>Explora la aceptación y la presencia como alternativas reales al ciclo de metas y frustraciones que caracteriza la vida moderna.</p>
              </div>
              <div className="vsp-feature-card">
                <div className="vsp-feature-number">03</div>
                <h3>Personajes icónicos como espejos</h3>
                <p>Reconócete en historias que conoces, pero vistas desde un ángulo que nunca habías considerado. La cultura popular como herramienta de autoconocimiento.</p>
              </div>
              <div className="vsp-feature-card">
                <div className="vsp-feature-number">04</div>
                <h3>Un diálogo que abre posibilidades</h3>
                <p>No es un manual de instrucciones. Es una conversación honesta que invita a pensar, sentir y, sobre todo, a decidir qué quieres hacer con tu propia existencia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cita destacada */}
        <section className="vsp-quote">
          <div className="vsp-section-container">
            <blockquote className="vsp-blockquote">
              "¿Qué pasa si el problema no eres tú, sino la pregunta que te han enseñado a hacerte?"
            </blockquote>
            <p className="vsp-quote-author">— Carlos A. Aguilera (Malavé)</p>
          </div>
        </section>

        {/* Para quién es */}
        <section className="vsp-audience">
          <div className="vsp-section-container">
            <p className="vsp-label">¿PARA QUIÉN ES?</p>
            <h2 className="vsp-section-title">Este libro es para ti si...</h2>
            <div className="vsp-audience-list">
              <div className="vsp-audience-item">Sientes que deberías tener más claro "para qué estás aquí"</div>
              <div className="vsp-audience-item">El éxito te llega, pero la satisfacción no</div>
              <div className="vsp-audience-item">Te cansas de vivir según expectativas que no elegiste</div>
              <div className="vsp-audience-item">Buscas una lectura que te piense, no que te tranquilice</div>
              <div className="vsp-audience-item">Quieres explorar tu vida con curiosidad en lugar de con urgencia</div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="vsp-final-cta">
          <div className="vsp-section-container">
            <h2 className="vsp-final-title">¿Listo para soltar la presión?</h2>
            <p className="vsp-final-description">
              Disponible en formato físico y digital.
            </p>
            <a
              href="https://siglantana.com/producto/vivir-sin-proposito/"
              target="_blank"
              rel="noopener noreferrer"
              className="vsp-btn-primary vsp-btn-large"
            >
              Consigue tu ejemplar →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default VivirSinProposito
