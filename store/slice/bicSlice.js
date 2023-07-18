// Browser Information Cookie Slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import i18n from "@/lib/i18n";

// Example
// export const setThunk = createAsyncThunk(`avpv/setBIC`, async (data, { dispatch, getState }) => {});

export const setBIC = createAsyncThunk(`avpv/setBIC`, async (data, { dispatch, getState }) => {
   const { mode, language } = getState().bic;
   Cookies.set("language", language, { expires: 365 });
   Cookies.set("mode", mode, { expires: 365 });
});

export const checkBIC = createAsyncThunk(`avpv/checkBIC`, async (data, { dispatch, getState }) => {
   if (Cookies.get("language") === undefined) {
      dispatch(makeNewBIC());
   } else {
      dispatch(getBIC());
   }
});

export const makeNewBIC = createAsyncThunk(`avpv/makeNewBIC`, async (data, { dispatch, getState }) => {
   const language = navigator.language.substring(0, 2);
   const isDarkTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;
   dispatch(changeLanguage(language));
   dispatch(changeTheme(isDarkTheme));
   dispatch(setBIC());
});

export const getBIC = createAsyncThunk(`avpv/getBIC`, async (data, { dispatch, getState }) => {
   const language = Cookies.get("language");
   const mode = Cookies.get("mode");
   dispatch(changeLanguage(language));
   dispatch(changeMode(mode));
});

const initialState = {
   language: "ko",
   mode: "system", // light, dark, system
   isDarkTheme: true,
};

const bicSlice = createSlice({
   name: "bic",
   initialState,
   reducers: {
      changeLanguage(state, data) {
         state.language = data.payload;
         Cookies.set("language", data.payload, { expires: 365 });
         i18n.changeLanguage(data.payload);
      },
      toggleTheme(state) {
         if (state.isDarkTheme === true) {
            state.mode = "light";
            Cookies.set("mode", "light", { expires: 365 });
            state.isDarkTheme = false;
         } else {
            state.mode = "dark";
            Cookies.set("mode", "dark", { expires: 365 });
            state.isDarkTheme = true;
         }
      },
      changeTheme(state, data) {
         const mode = data.payload;
         if (mode === "system") {
            state.isDarkTheme =
               window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;
         } else if (mode === "dark") {
            state.isDarkTheme = true;
         } else {
            state.isDarkTheme = false;
         }
      },
      changeMode(state, data) {
         state.mode = data.payload;
         Cookies.set("mode", data.payload, { expires: 365 });
         if (data.payload === "system") {
            state.isDarkTheme =
               window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false;
         } else if (data.payload === "dark") {
            state.isDarkTheme = true;
         } else {
            state.isDarkTheme = false;
         }
      },
   },

   extraReducers: (builder) => {
      builder.addCase(`bic/setBIC`, (state, action) => {});
      builder.addCase(`bic/getBIC`, (state, action) => {});
      builder.addCase(`bic/checkBIC`, (state, action) => {});
      builder.addCase(`bic/makeNewBIC`, (state, action) => {});
   },
});

export const { toggleTheme, changeTheme, changeMode, changeLanguage } = bicSlice.actions;

export default bicSlice.reducer;
