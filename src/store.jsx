import { configureStore } from "@reduxjs/toolkit";

import { habitReducer } from "./Redux/Reducer/habitReducer";

export const store = configureStore({
  reducer: { habitReducer },
});
