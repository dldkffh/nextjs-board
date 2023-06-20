import {configureStore} from "@reduxjs/toolkit";
// import reducer from './modules';
import bicSlice from "./slices/bicSlice";

export const store = configureStore({
    reducer: {
        bic: bicSlice,
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
