import React from 'react';
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="flex justify-center gap-3">
            <span>Такого логина не существует, попробуйте найти </span>
            <Link to="/">
                <span className="text-slate-500 underline underline-offset-8">другого пользователя</span>
            </Link>
        </div>
    );
};
