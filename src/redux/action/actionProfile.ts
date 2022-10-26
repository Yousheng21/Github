import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/apiData";
import {AxiosResponse} from "axios";
import {IProfile} from "../../interfaces/profile.interface";

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (login: string) => {
        const response = await instance(`users/${login}`);

        return (response) as AxiosResponse as IProfile
    }
)