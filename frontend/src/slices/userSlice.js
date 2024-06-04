import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      const expirationTime = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem("expirationTime", expirationTime);

      // Update cart data in localStorage
      localStorage.setItem("cart", JSON.stringify({ cartItems: action.payload.cartData || [] }));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");

      // Clear cart data in localStorage
      localStorage.removeItem("cart");
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;

export default userSlice.reducer;
