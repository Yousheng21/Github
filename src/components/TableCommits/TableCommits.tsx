import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";

import {getCommits} from "../../redux/action/actionCommit";
import {formattedDate} from "../../utils/utils";
import {Loader} from "../Loader/Loader";
import {ReactComponent as Arrow} from "../../icons/arrow_left.svg";

export const TableCommits = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {repo, login} = useParams();

    const {commits, isLoadingCommits} = useSelector((state: RootState) => state.commit);

    useEffect(() => {
        if (repo && login) {
            dispatch(getCommits({repo, login}));
        }
    }, [repo, login])

    if (isLoadingCommits) return <Loader />;

    return (
        <section className="flex flex-col gap-10">
            <div>
                <button className="flex gap-4 items-center" onClick={() => navigate(-1)}>
                    <Arrow />
                    <span>Назад</span>
                </button>
            </div>
            {
                commits ? (
                    <div className="overflow-x-auto shadow-right lg:shadow-none mt-5">
                        <div className="grid auto-rows-auto" style={{minWidth:"935px"}}>
                            <div className="grid grid-cols-3 text-center gap-6 pb-7 border-double border-b-4 border-stone-500 mb-2 font-bold">
                                <span>Автор</span>
                                <span>Хэш коммита</span>
                                <span>Дата</span>
                            </div>
                            {
                                commits.data.map((commit) =>
                                    <div key={commit.node_id} className="grid grid-cols-3 text-center gap-6 border-b-2 border-stone-100 p-4">
                                        <span>{commit.commit.committer.name}</span>
                                        <span>{commit.sha}</span>
                                        <span>{formattedDate(commit.commit.committer.date)}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ) : <span className="flex justify-center">Коммиты отсутствуют</span>
            }
        </section>
    );
};
