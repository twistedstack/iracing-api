import { configureStore,createSlice } from '@reduxjs/toolkit';

const reducerSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
     someAction: function() {

     }
  }
})

import {
	useDispatch,
	useSelector,
	type TypedUseSelectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    someReducer: reducerSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
