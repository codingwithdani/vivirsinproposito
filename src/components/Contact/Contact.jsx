import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'

function Contact() {
  const [state, handleSubmit] = useForm('xrevqaky')

  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-label">CONTACTO</p>
          <h2 className="contact-title">¿Hablamos?</h2>
          <p className="contact-description">
            Ya sea para contratar una conferencia, adquirir un libro o
            explorar una colaboración, estoy para escucharte.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">🌐</div>
              <div className="method-info">
                <p className="method-label">DISPONIBILIDAD</p>
                <p className="method-value">México · Presencial y remoto</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon method-icon--instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <div className="method-info">
                <p className="method-label">INSTAGRAM</p>
                <a
                  href="https://www.instagram.com/psic.carlosaguilera?igsh=NWRod3RxN2V4Z3N4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="method-link"
                >
                  @psic.carlosaguilera
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {state.succeeded ? (
            <div className="form-success">
              <p>¡Gracias por tu mensaje! Te responderé pronto.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">NOMBRE</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    required
                  />
                  <ValidationError field="name" errors={state.errors} className="form-error" />
                </div>

                <div className="form-group">
                  <label htmlFor="company">EMPRESA</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@correo.com"
                  required
                />
                <ValidationError field="email" errors={state.errors} className="form-error" />
              </div>


              <div className="form-group">
                <label htmlFor="message">MENSAJE</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Cuéntame de qué trata tu proyecto o necesidad..."
                  required
                ></textarea>
                <ValidationError field="message" errors={state.errors} className="form-error" />
              </div>

              <ValidationError errors={state.errors} className="form-error" />

              <button type="submit" className="form-submit" disabled={state.submitting}>
                {state.submitting ? 'Enviando...' : <>Enviar mensaje</>}
              </button>

              <p className="form-privacy">
                🔒 Tu información es confidencial y nunca será compartida.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
