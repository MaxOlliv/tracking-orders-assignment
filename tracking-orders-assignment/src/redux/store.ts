import { configureStore } from "@reduxjs/toolkit";
import { ordersApi } from "../pages/api/orders";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ordersApi.middleware),
});
