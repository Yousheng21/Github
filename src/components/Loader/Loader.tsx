import React from 'react';

import {ReactComponent as IconLoader} from "../../icons/loader.svg";

export const Loader = (): JSX.Element => {
    return (
        <div className="flex justify-center" role="status">
            <IconLoader className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-slate-600" />
            <span className="sr-only">Loading...</span>
        </div>
    );
};
