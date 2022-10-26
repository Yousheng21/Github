import {AsyncThunk} from "./api.interface";

export interface IStateRepo {
    repos: null | IRepos;
    isLoadingRepos: boolean;
}

export interface IRepo {
    id: string;
    name: string;
    language: string;
    description: string;
    stargazers_count: number;
}

export interface IRepos extends AsyncThunk{
    data: IRepo[];
}