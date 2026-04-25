import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: '"La conferencia transformó la manera en que nuestro equipo directivo entiende el liderazgo y la prevención del acoso. Práctica, fundamentada y con un impacto real en nuestra organización."',
      name: 'Mónica Reyes',
      position: 'Directora de RR.HH.',
      company: 'Grupo Industrial del Norte',
      initials: 'MR'
    },
    {
      rating: 5,
      text: '"\'Gánale al Depredador\' me abrió los ojos sobre situaciones que vivía sin reconocer. Un libro que debería leer cualquiera que trabaje en equipo. Claro, honesto y muy útil."',
      name: 'Jorge Lozano',
      position: 'Gerente de Operaciones',
      company: 'Empresa logística',
      initials: 'JL'
    },
    {
      rating: 5,
      text: '"El taller de comunicación efectiva cambió la dinámica de mi equipo en semanas. Carlos tiene una habilidad única para hacer comprensibles temas que parecían complejos."',
      name: 'Ana Pacheco',
      position: 'Coordinadora de Bienestar',
      company: 'Sector Salud',
      initials: 'AP'
    }
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <p className="testimonials-label">TESTIMONIOS</p>
          <h2 className="testimonials-title">
            Lo que dicen quienes ya trabajaron con Carlos
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.initials}</div>
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-position">{testimonial.position} — {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
