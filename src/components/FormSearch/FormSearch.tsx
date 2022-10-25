import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {clearProfile} from "../../redux/MainSlice";

export const FormSearch = () => {
    const dispatch = useDispatch<AppDispatch>()
    const history = useNavigate();
    const [login, setLogin] = useState("");

    const handleLogin = (e:ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setLogin(value);
    }

    const handleSubmit = async () => {
        await dispatch(clearProfile());
        history(`/profile/${login}`)
    }

    return (
        <div>
            <input value={login} onChange={handleLogin} placeholder="Введите логин"/>
            <button disabled={!login} onClick={handleSubmit}>Перейти</button>
        </div>
    );
};
