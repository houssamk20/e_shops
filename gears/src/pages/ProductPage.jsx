import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectProductById } from '../features/products/productsSlice'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const ProductPage = () => {
  const { id } = useParams()
  const product = useSelector(state => selectProductById(state, parseInt(id)))
  const dispatch = useDispatch()
  
  if (!product) {
    return <div>Product not found</div>
  }
  
  const handleAddToCart = () => {
    dispatch(addItem(product))
  }
  
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-w-md mx-auto rounded-lg shadow-md mt-16"
          />
        </div>
        
        <div>
          <div className="flex items-center mt-24 text-4xl font-bold" >
            <h2>{product.name}</h2>
          </div>
          
          <div className="mb-10">
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through mr-2">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-primary">
              ${product.price}
            </span>
          </div>
         {/* Render compatibales as a bullet list */}
         <ul className="list-disc list-inside text-gray-800 mb-6 text-xl">
           {Array.isArray(product.highlights) && product.highlights.map((item, idx) => (
             <li key={idx}>{item}</li>
           ))}
         </ul>

          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <button 
            onClick={handleAddToCart}
            className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p>Category: {product.category}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage