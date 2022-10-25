import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {getProfile, getRepos} from "../../redux/actionMain";

export const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {name} = useParams();

    const {profile, repos, isLoadingProfile, isLoadingRepos} = useSelector((state:RootState) => state.main);

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
        <div>
            <img src={profile.data.avatar_url} alt=""/>
            <span>
                Profile {profile.data.login}
            </span>
            {
                repos.data.length ? (
                    <ul>
                        {repos.data.map((repo) => <Link key={repo.id} to={`/${name}/commits/${repo.name}`}>
                            <li>{repo.name}</li>
                        </Link>) }
                    </ul>
                ) : <span>Публичные репозитории отсутствуют</span>
            }

        </div>
    );
};
