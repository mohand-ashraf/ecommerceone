import { configureStore } from '@reduxjs/toolkit';
import CategoriesReducer from './appSlice';

export const store = configureStore({
    reducer: { category: CategoriesReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                warnAfter: 64,
            },
        }),
});

export default store;