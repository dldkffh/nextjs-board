import {configureStore} from "@reduxjs/toolkit";
import BICookieSlice from "./BICookieSlice";

export const store = configureStore({
    reducer: {
        BICookie: BICookieSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['set/assignSidebarMenu'],
                // Ignore these field paths in all actions
                ignoredActionPaths: [],
                // Ignore these paths in the state
                ignoredPaths: ['set.sidebarMenu', 'principal.principalNav'],
            },
        }),
});
