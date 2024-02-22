import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  productList: [], //all the product /data come from Backend stored here using micro-reducer "setDataProduct"
  cartItem: JSON.parse(localStorage.getItem('cartItem'))  // all the cart Items are stored here
  
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct(state, action) {
      // console.log(action)

      //   const incorrectWay(){
      //1st Method
      //  return {
      //     productList: [...state.productList, action.payload]
      //   };
      //2nd method
      //state=[...action.payload ]

      // it only show the 1st array of the initial state
      // return {
      //    productList: [...action.payload]
      //   };
      //  }

      state.productList = [...action.payload];
    },
    addCartItems: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id); // check that the item is present or not
      if (check) {
        //alert("already in cart")
        toast.error("Item is already in the cart!");
      } else {
        const total = action.payload.discountedPrice;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        
            // storing the data into the LocalStorage of website
         
          
        ];
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        toast.success("Item added to the cart!")

      
        
      }
    },

    deleteCartItems(state, action) {
      const indexProduct = state.cartItem.findIndex(
        (el) => el._id === action.payload
      );
      state.cartItem.splice(indexProduct, 1);
      toast.success("Item removed from the cart!");
      
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));


    },

    increaseQuantity(state, action) {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);

      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      //Total or final Price
      const calculatePrice = state.cartItem[index].discountedPrice;
      const TotalPrice = calculatePrice * qtyInc;

      state.cartItem[index].total = TotalPrice;

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
   
    },
    decreaseQuantity(state, action) {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
    
      let qty = state.cartItem[index].qty;

      if (qty > 1) {
        const decqty = --qty;
        state.cartItem[index].qty = decqty;

        const calculatePrice = state.cartItem[index].discountedPrice;
        const TotalPrice = calculatePrice * decqty;

        state.cartItem[index].total = TotalPrice;
        
      } else {
        const index = state.cartItem.findIndex(
          (el) => el._id === action.payload
        );

        toast.success("Quantity Is successfully removed");
        state.cartItem.splice(index, 1);
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        return state;
        
      }
    },
  },
});

export const {
  setDataProduct,
  addCartItems,
  deleteCartItems,
  increaseQuantity,
  decreaseQuantity,
} = productSlice.actions;

export default productSlice.reducer;
