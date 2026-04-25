function Card({ children, icon, title, description, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  )
}

export default Card
