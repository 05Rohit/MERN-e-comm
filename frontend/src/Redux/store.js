
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlices";


 const store = configureStore({
  reducer: {
    product : productSlice,
  
  },
}); 

export default store