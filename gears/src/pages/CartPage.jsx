import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../features/cart/cartSelectors'
import CartItem from '../components/cart/CartItem'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>
            
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>
            
            {/* Updated Checkout Button with Link */}
            <Link 
              to="/checkout"
              className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-center"
            >
              Proceed to Checkout
            </Link>
            
            <Link 
              to="/products" 
              className="block text-center text-blue-600 hover:text-blue-800 mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage