import './Books.css'
import BookCard from './BookCard'

function Books() {
  const booksData = [
    {
      badge: 'NUEVO',
      badgeType: '',
      coverImage: '/VivirSinProposito.jpg',
      category: 'DESARROLLO PERSONAL · FILOSOFÍA DE VIDA',
      title: '¿Y si realmente no es necesario tener un Propósito para ser feliz?',
      intro: 'Vivimos bombardeados por la idea de que debemos tener un gran propósito, dejar un legado, trascender. Pero, ¿qué pasa si esa presión es, en sí misma, lo que te impide vivir plenamente?',
      features: [
        'Cuestiona los mandatos culturales sobre el éxito y el significado',
        'Descubre nuevas formas de habitar tu vida con aceptación y presencia',
        'Explora personajes icónicos como espejos de tu propia historia',
        'Un diálogo íntimo que abre posibilidades en lugar de cerrarlas'
      ]
    },
    {
      badge: 'BESTSELLER',
      badgeType: 'bestseller',
      coverImage: '/ganaleAlDepredador.jpg',
      category: 'PSICOLOGÍA LABORAL · AUTOPROTECCIÓN',
      title: 'Deja de ser víctima. Empieza a actuar.',
      intro: 'La violencia en el trabajo no siempre se ve. A veces es sutil, silenciosa, sistemática. Este libro te da las herramientas para reconocerla, enfrentarla y salir adelante.',
      features: [
        'Identifica patrones de violencia directa y sutil en tu entorno',
        'Aprende estrategias concretas para salir del rol de víctima',
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
            Escritos desde la experiencia real, con lenguaje accesible y reflexiones
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
