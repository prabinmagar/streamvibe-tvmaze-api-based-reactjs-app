import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import showsReducer from "./slices/showsSlice";
import { persistReducer } from "redux-persist";
import persistConfig from "./persistConfig";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  shows: showsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
