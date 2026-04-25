function SectionHeader({ label, title, description, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionHeader
