import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
// reducer can be an object - leaving code for the future purpose:
// const reducer = {
//   contacts: reducers,
// };
export const store = configureStore({
  reducer,
});
