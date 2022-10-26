import {AsyncThunk} from "./api.interface";

export interface IStateCommit {
    commits: null | ICommits;
    isLoadingCommits: boolean;
}

export interface ICommits extends AsyncThunk {
    data: ICommit[];
}

interface ICommit {
    node_id: string;
    sha: string;
    commit: {
        committer: {
            name: string;
            date: string;
        }
    }
}