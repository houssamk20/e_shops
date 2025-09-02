export const selectAllProducts = (state) => state.products.items;

export const selectProductById = (state, productId) => 
  state.products.items.find(product => product.id === productId);

export const selectFeaturedProducts = (state, count = 4) => 
  state.products.items.slice(0, count);

export const selectProductsByCategory = (state, category) => 
  state.products.items.filter(product => product.category === category);

export const selectProductCategories = (state) => {
  const categories = new Set(state.products.items.map(p => p.category));
  return Array.from(categories);
};

export const selectFilteredProducts = (state) => {
  const { items, filteredCategory } = state.products;
  return filteredCategory 
    ? items.filter(product => product.category === filteredCategory) 
    : items;
};

export const selectProductsStatus = (state) => state.products.status;

export const selectProductsError = (state) => state.products.error;

export const selectProductsOnSale = (state) => 
  state.products.items.filter(product => product.originalPrice);

export const selectOutOfStockProducts = (state) => 
  state.products.items.filter(product => product.stock <= 0);

export const selectLowStockProducts = (state, threshold = 5) => 
  state.products.items.filter(product => 
    product.stock > 0 && product.stock <= threshold
  );