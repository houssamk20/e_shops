export const selectCartItems = (state) => state.cart.items;

export const selectCartTotal = (state) => 
  state.cart.items.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  );

export const selectCartItemCount = (state) => 
  state.cart.items.reduce(
    (count, item) => count + item.quantity, 
    0
  );

export const selectCartItemById = (state, productId) => 
  state.cart.items.find(item => item.id === productId);

export const selectIsItemInCart = (state, productId) => 
  state.cart.items.some(item => item.id === productId);

export const selectCartDiscount = (state) => {
  return state.cart.items.reduce((total, item) => {
    if (item.originalPrice) {
      return total + ((item.originalPrice - item.price) * item.quantity);
    }
    return total;
  }, 0);
};

export const selectCartSubtotal = (state) => {
  return state.cart.items.reduce((total, item) => {
    if (item.originalPrice) {
      return total + (item.originalPrice * item.quantity);
    }
    return total + (item.price * item.quantity);
  }, 0);
};