interface CartItem {
  price: number;
  quantity: number;
}

// Function to calculate the total for a single item in the cart
export const calculateCartItemTotal = (cartItem: CartItem): number => {
  return cartItem.price * cartItem.quantity;
};

// Function to calculate the subtotal for the entire cart
export const calculateCartSubtotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total: number, cartItem: CartItem) => {
    const cartTotal = calculateCartItemTotal(cartItem);
    return total + cartTotal;
  }, 0);
};
