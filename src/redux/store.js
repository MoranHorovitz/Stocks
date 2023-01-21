import { configureStore } from "@reduxjs/toolkit";
import { stocksApi } from "./services/stocks-api-service/stocks-api";
import stocksReducer from "./stocksSlice";

export const store = configureStore({
  reducer: {
    [stocksApi.reducerPath]: stocksApi.reducer,
    stocksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stocksApi.middleware),
});
