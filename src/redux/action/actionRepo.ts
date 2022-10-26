import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/apiData";
import {AxiosResponse} from "axios";
import {IRepos} from "../../interfaces/repo.interface";

export const getRepos = createAsyncThunk(
    'repo/getRepos',
    async (login: string) => {
        const response = await instance(`users/${login}/repos`);

        return (response) as AxiosResponse as IRepos
    }
)