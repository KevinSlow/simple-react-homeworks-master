import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageBubble}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="img"/>
            </div>
            <div className="messageBlocks">
                <div className={s.message}>
                    <h1>{props.name}</h1>
                    <p>{props.message}</p>
                </div>
                <div className={s.time}>
                    <time>{props.time}</time>
                </div>
            </div>
        </div>
    );
}

export default Message;
