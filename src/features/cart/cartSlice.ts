import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

export interface CartState {
  items: { [id:string]:number}
}

const initialState: CartState = {
  items: {}
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   addToCart(state, action: PayloadAction<string>){
    if(state.items[action.payload]){
      state.items[action.payload]++;
    } else {
      state.items[action.payload] =1
    }
   },
   removeFromCart(state, action: PayloadAction<string>){
    delete state.items[action.payload]
   },
   updateQuantity(state, action: PayloadAction<{id:string, quantity:number}>){
    state.items[action.payload.id] = action.payload.quantity;
   }
  }
})

export const { addToCart, removeFromCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;

// selector to sum up the total items from cart
export function getItems(state: RootState){
  let total =0;
  for (const id in state.cart.items){
    total += state.cart.items[id];
  }
  return total
}
// calculate total sum in cart with createSelector hook, you need to get gata from 2 different reducers state

export const getTotalSum = createSelector(
  (state:RootState) => state.cart.items,
  (state: RootState) => state.products.products,
  (items, products) => {
    let totalSum = 0;
    for (const i in items ) {
      totalSum += products[i].price * items[i]
    }
    return totalSum;
  })
