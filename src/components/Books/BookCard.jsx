import { useNavigate } from 'react-router-dom'

function BookCard({ badge, badgeType, coverImage, category, title, intro, features, slug }) {
  const navigate = useNavigate()

  const handleCta = () => {
    if (slug) {
      navigate(`/${slug}`)
    }
  }

  return (
    <div className="book-card">
      <div className="book-image-container">
        <span className={`book-badge ${badgeType}`}>{badge}</span>
        <picture>
          <source srcSet={coverImage.replace(/\.(jpg|png)$/, '.webp')} type="image/webp" />
          <img src={coverImage} alt={`Portada del libro ${title}`} className="book-cover" />
        </picture>
      </div>
      <div className="book-content">
        <div className="book-category">{category}</div>
        <h3 className="book-title">{title}</h3>
        <p className="book-intro">{intro}</p>
        <ul className="book-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="book-cta" onClick={handleCta}>
          ¡Lo quiero! <span className="arrow">→</span>
        </button>
      </div>
    </div>
  )
}

export default BookCard
