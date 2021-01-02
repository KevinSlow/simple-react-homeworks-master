import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type initialStateType = {
    _id: number
    name: string
    age: number
}

type sort = { type: "check"; payload: initialStateType[]; }

type check = { type: "sort"; payload: initialStateType[]; }

export type Actions = sort | check;

const initialPeople: Array<initialStateType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const copyArray = [...initialPeople];
    const [people, setPeople] = useState(copyArray);

    const finalPeople = people.map(p => {
        return <div key={p._id}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    })

    const sortUp = () => setPeople(homeWorkReducer(copyArray, {
        type: "sort",
        payload: people.sort(function sortIncrease(a, b) {
            return a.name <= b.name ? -1 : 1;
        })
    }));


    const sortDown = () => setPeople(homeWorkReducer(copyArray, {
        type: "sort",
        payload: people.sort(function sortIncrease(a, b) {
            return a.name >= b.name ? -1 : 1;
        })
    }));
    const check = () => setPeople(homeWorkReducer(copyArray, {
        type: "check",
        payload: people.filter(st => st.age >= 18)
    }))
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={check}>check 18</SuperButton></div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
