import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import blogReducer from './pages/blog/blog.slice'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

// Lấy RootState và AppDispatch từ store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Use when dispatch createAsyncThunk
export const useAppDispatch = () => useDispatch<AppDispatch>()
