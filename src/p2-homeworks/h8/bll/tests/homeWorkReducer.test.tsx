import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";

type initialStateType = {
    _id: number
    name: string
    age: number
}

let initialState: initialStateType[];


beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const copyState = [...initialState]
    const newState = homeWorkReducer(copyState, {
        type: "sort",
        payload: copyState.sort(function sortIncrease(a, b) {
            if (a.name <= b.name) {
                return -1
            } else {
                return 1
            }
        })
    });
    console.log(newState);
    expect(newState.length).toBe(6);
    expect(newState[0].name).toBe("Александр");
});
test("sort name down", () => {
    const copyState = [...initialState]
    const newState = homeWorkReducer(copyState, {
        type: "sort", payload: copyState.sort(function sortIncrease(a, b) {
            if (a.name >= b.name) {
                return -1
            } else {
                return 1
            }
        })
    });
    expect(newState.length).toBe(6);
    expect(newState[0].name).toBe("Кот");
});
test("check age 18", () => {
    const copyState = [...initialState]
    const newState = homeWorkReducer(copyState, {type: "check", payload: copyState.filter(st => st.age >= 18)});
    expect(newState[0].age >= 18).toBe(true);
    expect(newState.length).toBe(4);
});
