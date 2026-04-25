function BookCard({ badge, badgeType, coverImage, category, title, intro, features }) {
  return (
    <div className="book-card">
      <div className="book-image-container">
        <span className={`book-badge ${badgeType}`}>{badge}</span>
        <img src={coverImage} alt={`Portada del libro ${title}`} className="book-cover" />
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
        <button className="book-cta">
          Conseguir el libro <span className="arrow">→</span>
        </button>
      </div>
    </div>
  )
}

export default BookCard
