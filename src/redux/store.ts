import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import favoritesHeroesReducer from './slices/favoritesSlice'
import battleHistoryReducer from './slices/battleHistorySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favoritesHeroes: favoritesHeroesReducer,
    battleHistory: battleHistoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch