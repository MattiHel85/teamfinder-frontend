import { configureStore, AnyAction} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import teamSlice from './slices/teamSlice';
import { RootState } from './slices/rootSlice';

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

export const store = configureStore({
    reducer: {
        teams: teamSlice
    }
})


