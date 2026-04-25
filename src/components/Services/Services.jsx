import './Services.css'

function Services() {
  const services = [
    {
      icon: '🎤',
      title: 'Talleres y Conferencias',
      description: 'Presentaciones dinámicas y documentadas para congresos, eventos empresariales y foros académicos. Adaptadas a tu audiencia y objetivos.'
    },
    {
      icon: '🏛️',
      title: 'Capacitación Empresarial',
      description: 'Talleres y programas formativos para líderes y equipos orientados a mejorar el clima organizacional, la comunicación y el cumplimiento normativo.'
    },
    {
      icon: '🎙️',
      title: 'Entrevistas y Medios',
      description: 'Disponible para podcasts, medios digitales, radio y televisión como especialista en psicología organizacional y bienestar laboral.'
    }
  ]

  const topics = [
    'Comunicación efectiva en equipos',
    'Prevención del acoso laboral',
    'Violencia organizacional',
    'Cumplimiento NOM-035',
    'Liderazgo y relaciones interpersonales',
    'Clima y cultura organizacional',
    'Propósito y bienestar personal'
  ]

  return (
    <section className="services" id="conferencias">
      <div className="services-container">
        <div className="services-header">
          <p className="services-label">SERVICIOS PROFESIONALES</p>
          <h2 className="services-title">
            Lleva el cambio a tu organización
          </h2>
          <p className="services-description">
            Conferencias y talleres diseñados para generar impacto real
            en equipos y líderes.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-topics">
          <p className="topics-label">TEMAS DE ESPECIALIDAD</p>
          <div className="topics-list">
            {topics.map((topic, index) => (
              <span key={index} className="topic-tag">{topic}</span>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <button className="services-button">
            Solicitar información <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
