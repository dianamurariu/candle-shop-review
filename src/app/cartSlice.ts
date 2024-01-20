import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalCount: number;
}

// Load cart items from localStorage
const savedCartItems = JSON.parse(
  localStorage.getItem("cartItems") || "[]"
) as CartItem[];

const initialState: CartState = {
  items: savedCartItems,
  totalCount: savedCartItems.reduce((total, item) => total + item.quantity, 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // If it exists, increase the quantity and update totalCount
        existingItem.quantity += quantity;
        state.totalCount += quantity;
      } else {
        // If not, add it with the specified quantity and update totalCount
        state.items.push(action.payload);
        state.totalCount += quantity;
      }

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      // Find the item to remove
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        // Update totalCount by subtracting the quantity of the removed item
        state.totalCount -= itemToRemove.quantity;
        // Update the Redux state
        state.items = state.items.filter((item) => item.id !== action.payload);
        // Update localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      // Find the item by ID and update its quantity and totalCount
      const itemToUpdate = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToUpdate) {
        // Update totalCount by adjusting for the change in quantity
        state.totalCount += action.payload.quantity - itemToUpdate.quantity;
        itemToUpdate.quantity = action.payload.quantity;
        // Update localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
