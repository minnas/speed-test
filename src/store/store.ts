import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { gameReducer, themeReducer } from "./dataSlices";
//asign reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  scores: gameReducer,
});
//define store
export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
