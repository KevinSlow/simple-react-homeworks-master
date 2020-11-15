import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";


const messageData = {
    avatar: "https://proza.ru/pics/2017/01/14/1314.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
           <AlternativeMessage
               avatar={messageData.avatar}
               name={messageData.name}
               message={messageData.message}
               time={messageData.time}
           />
            <hr/>
        </div>
    );
}

export default HW1;
