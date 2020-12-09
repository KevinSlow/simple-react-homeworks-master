import React from "react";
import s from "./Error404.module.css";

function Error404() {
    return (
        <div>
            <div id={s.notfound}>
                <div className={s.notfound}>
                    <div className={s.notfound404}>
                        <h1 className={s.title}>4<span>0</span>4</h1>
                    </div>
                    <p className={s.subtitle}>The page you are looking for might have been removed had its name changed or is temporarily
                        unavailable.</p>
                    <a href={s.link}>home page</a>
                </div>
            </div>
        </div>
    );
}

export default Error404;
