import React, {FunctionComponent} from 'react';

import {LayoutProps} from "./Layout.props";
import {ReactComponent as Logo} from "../icons/gh-logo.svg";
import {BrowserRouter, Link} from "react-router-dom";

const Layout = ({children}: LayoutProps) => {
    return (
        <BrowserRouter>
            <div className="flex flex-col gap-10 p-4">
                <header className="border-b-2 border-stone-500 p-5 ml-4 mr-4">
                    <Link to="/">
                        <div className="flex gap-5 items-center">
                            <Logo />
                            <h1 className="text-2xl font-mono font-bold underline underline-offset-8 decoration-stone-400">GitHub</h1>
                        </div>
                    </Link>
                </header>
                <main className="p-4">
                    {children}
                </main>
            </div>
        </BrowserRouter>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
