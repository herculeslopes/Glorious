import { combineReducers, configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./Features/Habits/slice";

const rootReducers = combineReducers({
  habits: habitsReducer,
})

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;