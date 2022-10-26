import {AsyncThunk} from "./api.interface";

export interface IStateProfile {
    profile: null | IProfile;
    isLoadingProfile: boolean;
}

export interface IProfile extends AsyncThunk{
    data: {
        login: string;
        avatar_url: string;
        location: string;
        public_repos: number;
    }

}