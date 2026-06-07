import './Books.css'
import BookCard from './BookCard'

function Books() {
  const booksData = [
    {
      badge: 'NUEVO',
      badgeType: '',
      slug: 'vivir-sin-proposito',
      coverImage: '/VivirSinProposito.jpg',
      category: 'DESARROLLO PERSONAL · FILOSOFÍA DE VIDA',
      title: '¿Y si realmente no es necesario tener un Propósito para ser feliz?',
      intro: 'Vivimos bombardeados por la idea de que debemos tener un gran propósito, dejar un legado y trascender. Pero, ¿qué pasa si esa presión es, en sí misma, lo que te impide vivir plenamente?',
      features: [
        'Cuestiona los mandatos culturales sobre el éxito y el significado',
        'Descubre nuevas formas de habitar tu vida con aceptación y presencia',
        'Explora personajes icónicos como espejos de tu propia historia',
        'Un diálogo íntimo que abre posibilidades en lugar de cerrarlas'
      ]
    },
    {      
      badge: 'DISRUPTIVO',
      badgeType: '',
      coverImage: '/ganaleAlDepredador.jpg',
      category: 'PSICOLOGÍA LABORAL · AUTOPROTECCIÓN',
      title: '¿Y si nadie viene a rescatarte, qué harías ante un agresor?',
      intro: 'La violencia en el trabajo no siempre se ve. A veces es sutil, silenciosa, sistemática. Este libro te da las herramientas para reconocerla, enfrentarla y salir adelante.',
      features: [
        'Identifica patrones de violencia directa y sutil en tu entorno',
        'Aprende estrategias concretas de empoderamiento ante el agresor',
        'Toma medidas preventivas antes de que el daño se profundice',
        'Escrito de forma amena, como un juego con reglas claras para ganar'
      ]
    }
  ]

  return (
    <section className="books" id="libros">
      <div className="books-container">
        <div className="books-header">
          <p className="books-label">PUBLICACIONES</p>
          <h2 className="books-title">
             Ideas para mentes inquietas
          </h2>
          <p className="books-description">
            Escritos desde la experiencia, con lenguaje accesible y reflexiones
            que te invitan a actuar.
          </p>
        </div>

        <div className="books-grid">
          {booksData.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Books
