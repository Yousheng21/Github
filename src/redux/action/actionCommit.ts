import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/apiData";
import {ICommits} from "../../interfaces/commit.interface";

export const getCommits = createAsyncThunk(
    'commit/getCommits',
    async ({repo, login}: {repo: string, login: string}) => {

        const response = await instance(`repos/${login}/${repo}/commits`);

        return (response) as unknown as ICommits;
    }
)