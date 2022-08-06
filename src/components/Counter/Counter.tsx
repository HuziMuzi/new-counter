import React, {ChangeEvent, useState} from 'react';
import SetCounter from "./SetCounter/SetCounter";
import { CounterPanel } from "./CounterPanel/CounterPanel";
import s from './Counter.module.css'

export const Counter = () => {

    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [value, setValue] = useState<number | null>(null)
    const [error, setError] = useState('')

    const onStartValue = () => {
        debugger
        setValue(startValue)
        setError('')
        console.log(value)
    }

    // let inputStartInvalid = startValue < 0 || startValue === maxValue || startValue > maxValue
    // let inputMaxInvalid = maxValue < 0 || maxValue === startValue || maxValue < startValue
    const chekingErrorStartValue = (valueInput : number) => {
        valueInput < 0 || valueInput >= maxValue ? setError('Incorrect value') :setError('Enter value and press SET')
    }

    const chekingErrorMaxValue = (valueInput : number) => {
            valueInput < 0 || valueInput <= startValue ? setError('Incorrect value') :setError('Enter value and press SET')
    }

    // const error = inputStartInvalid || inputMaxInvalid
    const buttonDisabled =  value !== null || error === 'Incorrect value'

    return (
        <div className={s.counter}>
            <SetCounter
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                onStartValue={onStartValue}
                buttonDisabled={buttonDisabled}
                // value={value}
                error={error}
                setValueChangeInput={setValue}

                chekingErrorMaxValue={chekingErrorMaxValue}
                chekingErrorStartValue={chekingErrorStartValue}
            />
            <CounterPanel
                startValue={startValue}
                setValue={setValue}
                value={value}
                maxValue={maxValue}
                buttonDisabled={buttonDisabled}
                error={error}
            />
        </div>
    );
};

