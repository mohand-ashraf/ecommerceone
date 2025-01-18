import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: JSON.parse(localStorage.getItem('products')) || [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishList: JSON.parse(localStorage.getItem('wishList')) || [],
    userInfo: null,
    theme: localStorage.getItem('theme') || 'light',
};


const appSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchCategoriesStart: (state, action) => {
            state.products = action.payload
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        addToCart: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload.id);
            if (!product) {
                state.cart.push(action.payload);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        addToWishList: (state, action) => {
            const product = state.wishList.find((product) => product.id === action.payload.id);
            if (!product) {
                state.wishList.push(action.payload);
            }
            localStorage.setItem('wishList', JSON.stringify(state.wishList));
        },
        removeFromWishList: (state, action) => {
            const product = state.wishList.findIndex((product) => product.id === action.payload.id);
            if (product !== -1) {
                state.wishList.splice(product, 1);
            }
            localStorage.setItem('wishList', JSON.stringify(state.wishList));
        },
        increment: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            product.quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decrement: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            if (product.quantity === 1) {
                product.quantity = 1;
            } else {
                product.quantity--;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeProductWishList: (state, action) => {
            state.wishList = state.wishList.filter((product) => product.id !== action.payload);
            localStorage.setItem('wishList', JSON.stringify(state.wishList));
        },
        clearProducts: (state) => {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        clearProductsWishList: (state) => {
            state.wishList = [];
            localStorage.setItem('wishList', JSON.stringify(state.wishList));
        },
        setUser: (state, action) => {
            state.userInfo = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
        },
    },
});

export const { fetchCategoriesStart, addToCart, addToWishList, removeFromWishList, increment, decrement, removeProduct, clearProducts, clearProductsWishList, removeProductWishList, setUser, toggleTheme } = appSlice.actions;

export default appSlice.reducer;