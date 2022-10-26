import {createSlice} from "@reduxjs/toolkit";
import {IStateRepo} from "../../interfaces/repo.interface";
import {getRepos} from "../action/actionRepo";

const initialState = {
    repos: null,
    isLoadingRepos: false,
};

export const RepoSlice = createSlice({
    name: 'repo',
    initialState: initialState as IStateRepo,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRepos.pending, state => {state.isLoadingRepos = true})
            .addCase(getRepos.rejected, state => {
                state.isLoadingRepos = false;
                state.repos = null;
            })
            .addCase(getRepos.fulfilled, (state, action) => {
                state.isLoadingRepos = false;
                state.repos = action.payload
            })
            .addDefaultCase(() => {})
    }
})