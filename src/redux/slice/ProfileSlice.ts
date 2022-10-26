import {createSlice} from '@reduxjs/toolkit';
import {getProfile} from "../action/actionProfile";
import {IStateProfile} from "../../interfaces/profile.interface";

const initialState = {
    profile: null,
    isLoadingProfile: false,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: initialState as IStateProfile,
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

            .addDefaultCase(() => {})
    }
})

export const {clearProfile} = ProfileSlice.actions;