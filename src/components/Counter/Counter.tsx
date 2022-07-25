import React, {useState} from 'react';
import SetCounter from "./SetCounter/SetCounter";
import {CounterPanel} from "./CounterPanel/CounterPanel";
import s from './Counter.module.css'

export const Counter = () => {

    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(1)
    const [value, setValue] = useState<number>(0)


    const setButtonHandler = () => {
        setValue(startValue)
    }

    return (
        <div className={s.counter}>
            <SetCounter
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                onClick={setButtonHandler}
            />
            <CounterPanel
                startValue={startValue}
                setValue={setValue}
                value={value}
                maxValue={maxValue}
                // setButton={setButtonHandler}
            />
        </div>
    );
};

