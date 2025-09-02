import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../features/cart/cartSlice'

const Navbar = () => {
  const cartItems = useSelector(selectCartItems)
  
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-3 py-3 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold text-accent">
          GamingGear
        </Link>
        
        <div className="flex space-x-6 mt-3 sm:mt-0">
          <Link to="/products" className="hover:text-accent transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-accent transition relative">
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar