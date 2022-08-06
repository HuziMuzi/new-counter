import React, { useState } from 'react';
import s from './CounterPanel.module.css'
import { Button } from "./Button/Button";
import { Display } from "./Display/Display";

type CounterPanel = {
    startValue: number
    value: number | null
    setValue: (val: number) => void
    maxValue: number
    buttonDisabled: boolean
    error: string
}

export const CounterPanel = (props: CounterPanel) => {

    const onClickPlus = () => {
        props.value && props.setValue(props.value + 1)
        //setValue((state) => state + 1 )
    }

    const onClickReset = () => {
        props.setValue(props.startValue)
    }

    // const textError = props.error ? 'Incorrect value' : 'Enter value and press SET'
    return (
        <div className={s.window}>
            <div className={s.windowValue}>
                {props.value ?
                    <Display value={props.value} maxValue={props.maxValue} />
                    : <span className={props.error === 'Incorrect value' ? s.errorMessage : s.alarmMessage}>{props.error}
                </span>
                }
            </div>
            <div className={s.buttons}>
                <Button name={'inc'} callBack={onClickPlus} disabledBtn={props.value === props.maxValue || !props.buttonDisabled || !!props.error} />
                <Button name={'reset'} callBack={onClickReset} disabledBtn={props.value === props.startValue || !props.buttonDisabled || !!props.error} />
            </div>
        </div>
    );
};

