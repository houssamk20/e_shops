import { Link,  useLocation  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearCart } from '../features/cart/cartSlice'

const ThankYou = () => {
  const dispatch = useDispatch()
  // Removed unused currentItems and currentTotal
  const location = useLocation()
  // Store order data in state so it persists after cart clearance
  const orderData = location.state?.orderData || {
    items: [],
    total: 0,
    orderNumber: `GG${Date.now()}${Math.floor(Math.random() * 1000)}`
  }

  useEffect(() => {
    // Ensure cart is cleared when arriving at thank you page
    dispatch(clearCart())
  }, [dispatch])

  const tax = orderData.total * 0.1
  const totalPaid = orderData.total + tax

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl">✓</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You for Your Order!</h1>
        <p className="text-lg text-gray-600 mb-2">
          Your order has been confirmed and will be shipped soon.
        </p>
        
        {/* Order Details */}
        <div className="bg-gray-50 p-6 rounded-lg mt-8 mb-8 text-left">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Order Details</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-semibold">{orderData.orderNumber}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Order Total:</span>
              <span className="font-semibold text-green-600">${totalPaid.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Items Ordered:</span>
              <span className="font-semibold">
                {orderData.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-semibold">
                {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {orderData.items.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="text-left">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                    <p className="text-gray-600 text-sm">Price: ${item.price}</p>
                  </div>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          
          {/* Price Breakdown */}
          <div className="border-t pt-4 mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${orderData.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold border-t pt-2">
              <span>Total Paid:</span>
              <span className="text-green-600">${totalPaid.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">What's Next?</h3>
          <ul className="text-left space-y-2 text-blue-700">
            <li>• You will receive an order confirmation email shortly</li>
            <li>• We'll notify you when your order ships</li>
            <li>• Delivery typically takes 3-5 business days</li>
            <li>• Track your order using the order number above</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Continue Shopping
          </Link>
          
          <Link 
            to="/"
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition font-semibold"
          >
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.print()}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Print Receipt
          </button>
        </div>

        {/* Support Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            Need help? <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou