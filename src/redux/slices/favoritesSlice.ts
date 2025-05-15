import type { Hero } from "@/assets/types/hero";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState: Hero[] = [];

export const favoritesSlice = createSlice({
    name: 'favoritesHeroes',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Hero>) => {
            state.push(action.payload);
        },

        removeFavorite: (state, action: PayloadAction<Hero>) => {
            state.splice(state.indexOf(action.payload), 1);
        }
    },
})

export const {addFavorite, removeFavorite} = favoritesSlice.actions

export default favoritesSlice.reducer