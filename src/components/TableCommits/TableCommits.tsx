import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {getCommits} from "../../redux/actionMain";

export const TableCommits = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {repo, login} = useParams();

    const {commits, isLoadingCommits} = useSelector((state: RootState) => state.main)

    useEffect(() => {
        if (repo && login) {
            dispatch(getCommits({repo, login}));
        }
    }, [repo, login])

    if (isLoadingCommits) return <span>Loading</span>;
    if (!commits) return <span>Коммиты отсутствуют</span>;

    return (
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
            <ul>
                {commits.data.map((commit) => <li key={commit.node_id}>{commit.sha}</li>)}
            </ul>
        </div>
    );
};
