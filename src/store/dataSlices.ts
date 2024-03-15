import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Score, Theme } from "@Types/types";

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "dark" } as Theme,
  reducers: {
    toggle: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});
const gameSlice = createSlice({
  name: "game",
  initialState: [] as Score[],
  reducers: {
    addScore: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() } as Score);
    },
    removeScore: (state, action) => {
      return state.filter((s: Score) => s.id !== action.payload.id);
    },
  },
});
/**reducers */
export const themeReducer = themeSlice.reducer;
export const gameReducer = gameSlice.reducer;
/**actions */
export const { toggle } = themeSlice.actions;
export const { addScore, removeScore } = gameSlice.actions;
