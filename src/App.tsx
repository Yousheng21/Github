import React from 'react';
import {Route, Routes} from "react-router-dom";

import {FormSearch} from "./components/FormSearch/FormSearch";
import {Profile} from "./components/Profile/Profile";
import {TableCommits} from "./components/TableCommits/TableCommits";
import {withLayout} from "./layout/Layout";

function App() {
    return (
        <Routes>
            <Route path="" element={<FormSearch />} />
            <Route path="/profile/:name" element={<Profile />} />
            <Route path="/:login/commits/:repo" element={<TableCommits />} />
        </Routes>
    );
}

export default withLayout(App);
