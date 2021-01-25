import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css'


type SuperDoubleRangePropsType = {
    onChangeRange: any
    values?: number[]
    min: number, max: number, step: number, disable?: boolean
    setValue1: any
    setValue2: any
}
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const SuperDoubleRange: React.FC<DefaultInputPropsType & SuperDoubleRangePropsType> = (
    {
        onChange, values,onChangeRange,
        min, max, step, disable, ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки


    const handleChange = (range: number[]) => {
        restProps.setValue1( range[0])
        restProps.setValue2(range[1])
    }


    return (
        <>
            <Range
                className="slider"
                min={min}
                max={max}
                step={0.5}
                onChange={handleChange}
                draggableTrack={true}
                value={values}
            />
        </>
    );
}

export default SuperDoubleRange;