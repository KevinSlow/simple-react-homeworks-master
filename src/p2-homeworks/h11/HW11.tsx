import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";


function HW11() {

    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);
    const priceRange = {
        min: 0,
        max: 100
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange // сделать так чтоб value1 и value2 изменялось
                    values={[value1,value2]}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChangeRange={setValue2}
                    step={10}
                    setValue1={setValue1}
                    setValue2={setValue2}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
