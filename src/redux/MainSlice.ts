import {createSlice} from '@reduxjs/toolkit';
import {IStateMain} from "../interfaces/api.interface";
import {getCommits, getProfile, getRepos} from "./actionMain";

const initialState = {
    login: "",
    profile: null,
    repos: null,
    commits: null,
    isLoadingProfile: false,
    isLoadingRepos: false,
    isLoadingCommits: false,
};

export const MainSlice = createSlice({
    name: 'main',
    initialState: initialState as IStateMain,
    reducers: {
        clearProfile: (state) => {
            state.profile = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, state => {state.isLoadingProfile = true})
            .addCase(getProfile.rejected, state => {
                state.isLoadingProfile = false;
                state.profile = null;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoadingProfile = false;
                state.profile = action.payload
            })

            .addCase(getRepos.pending, state => {state.isLoadingRepos = true})
            .addCase(getRepos.rejected, state => {
                state.isLoadingRepos = false;
                state.repos = null;
            })
            .addCase(getRepos.fulfilled, (state, action) => {
                state.isLoadingRepos = false;
                state.repos = action.payload
            })

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

export const {clearProfile} = MainSlice.actions;