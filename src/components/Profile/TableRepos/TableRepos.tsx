import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Star} from "../../../icons/star.svg";
import {TableReposProps} from "./TableRepos.props";

export const TableRepos = ({repos, name}: TableReposProps): JSX.Element => {

    if (!repos.length) return <div className="flex justify-center items-center w-full">Публичные репозитории отсутствуют</div>;

    return (
        <div className="overflow-x-auto shadow-right md:shadow-none">
            <div className="grid auto-rows-auto" style={{minWidth:"635px"}}>
                <div className="grid grid-cols-4 text-center gap-6 pb-7 border-double border-b-4 border-stone-500 mb-2 font-bold">
                    <span>Наименование</span>
                    <span>Язык программирования</span>
                    <span>Описание</span>
                    <span>Количество звезд</span>
                </div>
                {
                    repos.map((repo) =>
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
                }
            </div>
        </div>
    );
};
