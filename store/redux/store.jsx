import { configureStore } from '@reduxjs/toolkit';
import favslice from './favslice';
import logslice from './logslice';
export const store = configureStore({
    reducer: {
        fav: favslice.reducer,
        log: logslice,
    },
});