import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";

import {getProfile} from "../../redux/action/actionProfile";
import {getRepos} from "../../redux/action/actionRepo";
import {ReactComponent as Star} from "../../icons/star.svg";
import {ReactComponent as Location} from "../../icons/location.svg";

export const Profile = () => {
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

    if (isLoadingProfile || isLoadingRepos) return <span>Loading</span>;
    if (!profile?.data || !name || !repos) return <span>Пользователя не существует</span>

    return (
        <section className="flex flex-col lg:flex-row gap-20">
            <aside className="flex flex-col gap-3">
                <div className="">
                    <img className="w-60 lg:w-auto rounded" src={profile.data.avatar_url} alt=""/>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="border-b-2 border-stone-900">Логин: {profile.data.login}</h1>
                    {profile.data.location && (
                        <div className="flex items-center justify-between">
                            <span>{profile.data.location}</span>
                            <Location />
                        </div>
                    )}
                </div>
            </aside>
            <div className="overflow-x-auto shadow-right md:shadow-none">
                <div className="grid auto-rows-auto" style={{minWidth:"635px"}}>
                    <div className="grid grid-cols-4 text-center gap-6 pb-7 border-double border-b-4 border-stone-500 mb-2 font-bold">
                        <span>Наименование</span>
                        <span>Язык программирования</span>
                        <span>Описание</span>
                        <span>Количество звезд</span>
                    </div>
                    {
                        repos.data.length ? repos.data.map((repo) =>
                                <Link key={repo.id} to={`/${name}/commits/${repo.name}`} className="grid">
                                    <div className="grid grid-cols-4 text-center gap-6 border-b-2 border-stone-100 p-4 hover:bg-stone-100">
                                        <span>{repo.name}</span>
                                        <span>{repo.language}</span>
                                        <span>{repo.description}</span>
                                        <div className="grid grid-cols-2 gap-4 items-center justify-center">
                                            <span className="text-right">{repo.stargazers_count}</span>
                                            <Star className="fill-slate-500" />
                                        </div>
                                    </div>
                                </Link>)
                            : <span>Публичные репозитории отсутствуют</span>
                    }
                </div>
            </div>
        </section>
    );
};
