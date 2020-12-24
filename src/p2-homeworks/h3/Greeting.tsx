import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    setOnClick: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setOnClick} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.success; // need to fix with (?:)

    return (
        <div className={s.form}>
            <input value={name} onClick={setOnClick} onChange={setNameCallback} className={inputClass} placeholder={error}/>
            <button onClick={addUser}>add</button>
            <span className={s.total}>Total Users: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
