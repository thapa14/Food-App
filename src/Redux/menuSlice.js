import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  productList: [
    {
      name: "Hamburger",
      price: "200",
      quantity: 0,
      image: "./images/burger.jpeg",
    },
    {
      name: "Fries",
      price: "100",
      quantity: 0,
      image: "./images/fries.jpeg",
    },
    {
      name: "Coke",
      price: "50",
      quantity: 0,
      image: "./images/coke.jpeg",
    },
    {
      name: "Pepsi",
      price: "50",
      quantity: 0,
      image: "./images/pepsi.jpeg",
    },
  ],
  userList: [],
};

const foodAppSlice = createSlice({
  name: "foodApp",
  initialState: initialValue,
  reducers: {
    increment: (state, action) => {
      const newList = state.productList.map((product) => {
        if (product.name === action.payload.name) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return { ...product };
        }
      });

      return {
        ...state,
        productList: newList,
      };
    },
    decrement: (state, action) => {
      const newList = state.productList.map((product) => {
        if (product.name === action.payload.name) {
          if (product.quantity) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return {
              ...product,
            };
          }
        } else {
          return { ...product };
        }
      });
      return {
        ...state,
        productList: newList,
      };
    },
    clearCart: (state, action) => {
      return {
        ...initialValue,
      };
    },
  },
});

export const { increment, decrement, clearCart } = foodAppSlice.actions;
export default foodAppSlice.reducer;
