import { configureStore } from "@reduxjs/toolkit";
import stockCryptoReducer from "./stockCryptoSlice";
import { combineReducers } from "redux";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // Ignore write errors
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: combineReducers({
    stockCrypto: stockCryptoReducer,
  }),
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
