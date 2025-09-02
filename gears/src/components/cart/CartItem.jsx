import { useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from '../../features/cart/cartSlice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value)
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }))
    }
  }
  
  const handleRemove = () => {
    dispatch(removeItem(item.id))
  }
  
  return (
    <div className="flex items-center border-b py-4">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-20 h-20 object-cover rounded"
      />
      
      <div className="ml-4 flex-grow">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      
      <div className="flex items-center">
        <input 
          type="number" 
          min="1" 
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 border rounded px-2 py-1 text-center"
        />
        
        <button 
          onClick={handleRemove}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem