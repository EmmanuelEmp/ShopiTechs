import { createSlice } from '@reduxjs/toolkit';

const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const initialShippingAddress = JSON.parse(localStorage.getItem('shippingAddress')) || {};
const initialPaymentMethod = localStorage.getItem('paymentMethod') || '';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: initialCartItems,
        shippingAddress: initialShippingAddress,
        paymentMethod: initialPaymentMethod,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i._id === item._id);

            if (existingItem) {
                existingItem.qty += item.qty;
            } else {
                state.cartItems.push(item);
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find(item => item._id === itemId);

            if (existingItem) {
                if (existingItem.qty > 1) {
                    existingItem.qty -= 1;
                } else {
                    state.cartItems = state.cartItems.filter(item => item._id !== itemId);
                }
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
        clearCartItems: (state) => {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
        },
        loadCartItems: (state) => {
            state.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            localStorage.setItem('shippingAddress', JSON.stringify(state.shippingAddress));
        },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            localStorage.setItem('paymentMethod', state.paymentMethod);
        },
    },
});

export const { addToCart, removeFromCart, clearCartItems, loadCartItems, saveShippingAddress, savePaymentMethod } = cartSlice.actions;
export default cartSlice.reducer;
