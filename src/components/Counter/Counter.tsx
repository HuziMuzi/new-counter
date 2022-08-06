import React, {ChangeEvent, useState} from 'react';
import SetCounter from "./SetCounter/SetCounter";
import {CounterPanel} from "./CounterPanel/CounterPanel";
import s from './Counter.module.css'

export const Counter = () => {

    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [value, setValue] = useState<number>(0)
    const [error, setError] = useState('')

    const onStartValue = () => {
        setValue(startValue)
        setError('')
        console.log(value)
    }

    const chekingErrorStartValue = (valueInput: number) => {
        valueInput < 0 || valueInput >= maxValue ? setError('Incorrect value')
            : setError('Enter value and press SET')
    }
    const chekingErrorMaxValue = (valueInput: number) => {
        valueInput < 0 || valueInput <= startValue ? setError('Incorrect value')
            : setError('Enter value and press SET')
    }

    const onClickPlus = () => {
        setValue(value + 1)
    }
    const onClickReset = () => {
        setValue(startValue)
    }

    return (
        <div className={s.counter}>
            <SetCounter
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                onStartValue={onStartValue}
                error={error}
                setValueChangeInput={setValue}
                chekingErrorMaxValue={chekingErrorMaxValue}
                chekingErrorStartValue={chekingErrorStartValue}
            />
            <CounterPanel
                startValue={startValue}
                onClickPlus={onClickPlus}
                onClickReset={onClickReset}
                value={value}
                maxValue={maxValue}
                error={error}
            />
        </div>
    );
};

