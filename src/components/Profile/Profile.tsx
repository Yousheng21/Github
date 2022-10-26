import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";

import {getProfile} from "../../redux/action/actionProfile";
import {getRepos} from "../../redux/action/actionRepo";
import {ReactComponent as Location} from "../../icons/location.svg";
import {Loader} from "../Loader/Loader";
import {NotFound} from "./NotFound";
import {TableRepos} from "./TableRepos/TableRepos";

export const Profile = ():JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const {name} = useParams();

    const {profile, isLoadingProfile} = useSelector((state:RootState) => state.profile);
    const {repos, isLoadingRepos} = useSelector((state:RootState) => state.repo);

    useEffect(() => {
        if (name && !profile) {
            dispatch(getProfile(name))
                .unwrap()
                .then(() => dispatch(getRepos(name)));
        }
    }, [name]);

    if (isLoadingProfile || isLoadingRepos) return <Loader />;
    if (!profile?.data || !name || !repos) return <NotFound />

    return (
        <section className="flex flex-col justify-center lg:flex-row gap-20">
            <aside className="flex flex-col gap-3 items-center">
                <div className="">
                    <img className="max-w-img rounded" src={profile.data.avatar_url} alt=""/>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="border-b-2 border-stone-900">Логин: {profile.data.login}</h1>
                    {profile.data.location && (
                        <div className="flex items-center gap-6 justify-between">
                            <span>{profile.data.location}</span>
                            <Location className="w-10" />
                        </div>
                    )}
                </div>
            </aside>
            <TableRepos repos={repos.data} name={name} />
        </section>
    );
};
