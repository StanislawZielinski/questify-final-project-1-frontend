import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/reducer";
import { reducers } from "./cards/reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn"],
};
const reducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  cards: reducers,
};
export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);
