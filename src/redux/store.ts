import {configureStore} from "@reduxjs/toolkit";
import {ProfileSlice} from "./slice/ProfileSlice";
import {RepoSlice} from "./slice/RepoSlice";
import {CommitSlice} from "./slice/CommitSlice";

const store = configureStore({
    reducer: {
        profile: ProfileSlice.reducer,
        repo: RepoSlice.reducer,
        commit: CommitSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;