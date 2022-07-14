import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../app/api";

export interface ProductsState {
  products: {[productID:string]: Product}
}

const initialState: ProductsState = {
  products: { }
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers:{
    receiveProducts(state, action:PayloadAction<Product[]>){
     const products = action.payload;
     products.forEach(product => {
      state.products[product.id] = product;
     })
    }
  }
})

export const { receiveProducts} = productsSlice.actions;

export default productsSlice.reducer;
