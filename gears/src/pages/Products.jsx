import { useSelector } from 'react-redux'
import { selectAllProducts } from '../features/products/productsSlice'
import ProductCard from '../components/products/ProductCard'
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const products = useSelector(selectAllProducts)
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  // Filter products by category if specified
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div className="container mx-auto px-1 py-14">
      {category && (
        <h2 className="text-2xl mb-4">Category: {category}</h2>
      )}
      <h1 className="text-4xl font-heading font-bold mb-6 mt-5">
        {category ? `${category} Products` : 'All Products'}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products