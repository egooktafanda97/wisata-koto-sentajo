import React, { useEffect, useState, Suspense } from "react";
import { HashRouter, Router, Route, Link, Switch } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

/////page ////
import Rute from "../page/Router/index";
import Website from "../Layout/Website/index";

export const DelayedFallback = ({ children, delay = 300 }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        let timeout = setTimeout(() => setShow(true), delay);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    console.log(show);
    return <>{show && children}</>;
};

export default function router() {
    const [loading, setLoading] = useState(true);
    return (
        <Switch>
            {Rute.map(({ path, Component }, I) => (
                <Route
                    key={I}
                    path={path}
                    render={(props) => (
                        <Suspense fallback={DelayedFallback}>
                            <Website
                                components={<Component {...props} />}
                            ></Website>
                        </Suspense>
                    )}
                ></Route>
            ))}
        </Switch>
    );
}
