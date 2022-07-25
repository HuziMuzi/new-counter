import React, {useState} from 'react';
import s from './CounterPanel.module.css'
import {Button} from "./Button/Button";
import {Display} from "./Display/Display";

type CounterPanel = {
    startValue: number
    value: number
    setValue: (val: number) => void
    maxValue: number
    statusBtn: boolean
}

export const CounterPanel = (props: CounterPanel) => {


    const onClickPlus = () => {
        props.setValue(props.value + 1)
        //setValue((state) => state + 1 )
    }

    const onClickReset = () => {
        props.setValue(props.startValue)
    }

    return (
        <div className={s.window}>
            <div className={s.windowValue}>
                {props.statusBtn ?
                    <Display value={props.value} maxValue={props.maxValue}/>
                    : <span className={s.alarmMessage}>{"Enter value and press SET"}</span>
                }
            </div>
            <div className={s.buttons}>
                <Button name={'inc'} callBack={onClickPlus} disabledBtn={props.value === props.maxValue}/>
                <Button name={'reset'} callBack={onClickReset} disabledBtn={props.value === 0}/>
            </div>
        </div>
    );
};

