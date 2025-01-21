import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './slices/cartSlice';
import authReducer from './Slices/authSlice';

export default configureStore({
    reducer: {
        // cart: cartReducer,
        auth: authReducer,
    }
})

