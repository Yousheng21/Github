interface AsyncThunk {
    status: number;
    statusText: string;
}
export interface IStateMain {
    login: string;
    profile: null | IProfile;
    repos: null | IRepos;
    commits: null | ICommits;
    isLoadingProfile: boolean;
    isLoadingRepos: boolean;
    isLoadingCommits: boolean;
}

export interface IProfile extends AsyncThunk{
    data: {
        login: string;
        avatar_url: string;
    }

}

interface IRepo {
    id: string;
    name: string;
    language: string;
    description: string;
    stargazers_count: number;
}

export interface IRepos extends AsyncThunk{
    data: IRepo[];
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