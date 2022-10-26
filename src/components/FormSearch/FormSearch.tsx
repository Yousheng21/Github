import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {clearProfile} from "../../redux/slice/ProfileSlice";

export const FormSearch = () => {
    const dispatch = useDispatch<AppDispatch>()
    const history = useNavigate();
    const [login, setLogin] = useState("");

    const handleLogin = (e:ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setLogin(value);
    }

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && login) {
            await handleSubmit();
        }
    }

    const handleSubmit = async () => {
        await dispatch(clearProfile());
        history(`/profile/${login}`)
    }

    return (
        <section className="flex justify-center">
            <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
                <div className="col-span-5">
                    <input
                        className="w-full h-full border border-stone-900 rounded border-none shadow-stone-500/50 shadow-lg
                                   focus:outline-none
                                   pl-3 p-3"
                           value={login} onKeyDown={handleKeyDown} onChange={handleLogin} placeholder="Введите логин"/>
                </div>
                <button className="border-none p-3 pr-4 pl-4 bg-gray-600 rounded text-white
                                   disabled:bg-gray-400"
                        disabled={!login} onClick={handleSubmit}>Перейти</button>
            </div>
        </section>
    );
};
