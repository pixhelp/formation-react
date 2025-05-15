import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Hero } from "@/assets/types/hero";

type Battle = {
heroOne: Hero;
heroTwo: Hero;
winner: Hero;
timestamp: string;
};

type BattleState = Battle[];

const initialState: BattleState = [];

const battleHistorySlice = createSlice({
name: "battleHistory",
initialState,
reducers: {
    addBattle: (state, action: PayloadAction<Battle>) => {
    state.unshift(action.payload);
    },
    clearHistory: () => {
    return [];
    },
},
});

export const { addBattle, clearHistory } = battleHistorySlice.actions;
export default battleHistorySlice.reducer;