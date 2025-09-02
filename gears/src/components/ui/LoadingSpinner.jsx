const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizes[size]} animate-spin rounded-full border-4 border-solid border-primary border-t-transparent`}
      />
    </div>
  )
}

export default LoadingSpinner