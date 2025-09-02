import { useSelector } from 'react-redux'
import { selectAllProducts } from '../features/products/productsSlice'
import ProductCard from '../components/products/ProductCard'

const Products = () => {
  const products = useSelector(selectAllProducts)

  return (
    <div className="container mx-auto px-1 py-14">
      <h1 className="text-4xl font-heading font-bold mb-6 mt-5">All Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products