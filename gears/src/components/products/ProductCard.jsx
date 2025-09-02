import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'
import { selectIsItemInCart } from '../../features/cart/cartSelectors';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(state =>
    selectIsItemInCart(state, product.id)
  );

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="flex justify-center items-center min-h-[400px]"> {/* Center the card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col w-full max-w-xs"> {/* Set max width */}
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 sm:h-56 object-cover"
          />
        </Link>
        
        <div className="p-4 flex flex-col flex-1">
          <Link to={`/products/${product.id}`} className="block">
            <h3 className="text-xl font-semibold mb-1 hover:text-primary transition">
              {product.name}
            </h3>
          </Link>
          
          <div className="flex items-center mb-3">
            <span className="text-xl font-bold text-primary">${product.price}</span>
            {product.originalPrice && (
              <span className="text-base text-gray-500 line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`px-4 py-2 rounded mt-auto ${isInCart ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
          >
            {isInCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard