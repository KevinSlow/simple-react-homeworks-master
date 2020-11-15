import React from "react";
import s from "./Message.module.css";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function AlternativeMessage(props:MessagePropsType) {
    return (
        <div className={s.alterMessageBubble}>
            <div className={s.alterAvatar}>
                <img src={props.avatar} alt="img"/>
            </div>
            <div>
                <div className={s.alterMessage}>
                    <h1>{props.name}</h1>
                    <p>{props.message}</p>
                </div>
                <div className={s.alterTime}>
                    <time>{props.time}</time>
                </div>
            </div>
        </div>
    );
}

export default AlternativeMessage;
