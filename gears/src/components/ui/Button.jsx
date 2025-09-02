const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = '',
  disabled = false
}) => {
  const variants = {
    primary: 'bg-primary hover:bg-secondary text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-dark',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md transition ${variants[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button