import './Services.css'

function Services() {
  const services = [
    {
      title: 'Conferencias y experiencias',
      description: 'Espacios de pensamiento crítico que desafían audiencias.'
    },
    {
      title: 'Consultoria organizacional',
      description: 'Acompañamiento estratégico para identificar grietas en la organización y co-crear entornos laborales saludables.'
    },
    {
      title: 'Medios y colaboraciones',
      description: 'Especialista disponible para podcasts, medios digitales, radio y televisión.'
    },
    {
      title: 'Libros, Programas y Experiencias',
      description: 'Diseño espacios de aprendizaje y reflexión colectiva que combinan teoría con práctica.'
    }
  ]

  const topics = [
    'Empoderamiento ante la violencia laboral',
    'Liderazgo y relaciones interpersonales',
    'Clima y cultura organizacional',
    'Propósito y bienestar personal'
  ]

  const handleScrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="services" id="conferencias">
      <div className="services-container">
        <div className="services-header">
          <p className="services-label">SERVICIOS PROFESIONALES</p>
          <h2 className="services-title">
            Lleva el cambio a tu vida y a tu organización
          </h2>
          <p className="services-description">
            Conferencias y talleres diseñados para generar impacto.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description" style={{whiteSpace: 'pre-line'}}>{service.description}</p>
            </div>
          ))}
        </div>

{/*         <div className="services-topics">
          <p className="topics-label">TEMAS DE ESPECIALIDAD</p>
          <div className="topics-list">
            {topics.map((topic, index) => (
              <span key={index} className="topic-tag">{topic}</span>
            ))}
          </div>
        </div>
 */}
        <div className="services-cta">
          <button className="services-button" onClick={handleScrollToContact}>
            Solicitar información 
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
