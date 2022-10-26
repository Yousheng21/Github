import {createSlice} from "@reduxjs/toolkit";
import {IStateCommit} from "../../interfaces/commit.interface";
import {getCommits} from "../action/actionCommit";

const initialState = {
    commits: null,
    isLoadingCommits: false,
};

export const CommitSlice = createSlice({
    name: 'main',
    initialState: initialState as IStateCommit,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCommits.pending, state => {state.isLoadingCommits = true})
            .addCase(getCommits.rejected, state => {
                state.isLoadingCommits = false;
                state.commits = null;
            })
            .addCase(getCommits.fulfilled, (state, action) => {
                state.isLoadingCommits = false;
                state.commits = action.payload;
            })
            .addDefaultCase(() => {})
    }
})