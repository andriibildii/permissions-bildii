import {configureStore} from '@reduxjs/toolkit';
import permissionsReducer from './permissionsSlice'

export const store = configureStore({
    reducer: {
        permissions: permissionsReducer,
    }
});
