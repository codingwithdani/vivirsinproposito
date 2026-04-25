function Button({ children, variant = 'primary', onClick, type = 'button', className = '' }) {
  const baseClass = 'btn'
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary'

  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
