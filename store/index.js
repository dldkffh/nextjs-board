import { configureStore } from "@reduxjs/toolkit";
import bicSlice from "./slice/bicSlice";

const store = configureStore({
   reducer: {
      // 리듀서 등록
      // 예: counter: counterReducer
      bic: bicSlice,
   },
});

export default store;
