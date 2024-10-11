"use client"
import { configureStore } from "@reduxjs/toolkit"
import pageSlice from "./features/pageSlice"

export const store: any = () => {
  return configureStore({
    reducer: {
      pages: pageSlice,
    },
  })
}

// Infer the type of store
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
