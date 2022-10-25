import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ICommits, IProfile, IRepos} from "../interfaces/api.interface";
import {instance} from "../components/api/apiData";

export const getProfile = createAsyncThunk(
    'main/getProfile',
    async (login: string) => {
        const response = await instance(`users/${login}`);

        return (response) as AxiosResponse as IProfile
    }
)

export const getRepos = createAsyncThunk(
    'main/getRepos',
    async (login: string) => {
        const response = await instance(`users/${login}/repos`);

        return (response) as AxiosResponse as IRepos
    }
)

export const getCommits = createAsyncThunk(
    'main/getCommits',
    async ({repo, login}: {repo: string, login: string}) => {

        const response = await instance(`repos/${login}/${repo}/commits`);

        return (response) as unknown as ICommits;
    }
)