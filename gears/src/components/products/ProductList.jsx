import { useSelector } from 'react-redux';
import { selectProductsData } from '../../features/products/productsSelectors';
import ProductCard from './ProductCard';
import LoadingSpinner from '../ui/LoadingSpinner';

const ProductList = () => {
  const { products = [], isLoading, isError, error } = useSelector(selectProductsData);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error: {error}</div>;

  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;