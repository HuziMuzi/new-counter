import React, {useState} from 'react';
import s from './SetCounter.module.css'
import {Button} from "../CounterPanel/Button/Button";
import {InputValue} from "./InputValue/InputValue";


type SetCounter = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onClick : () => void

}

const SetCounter = (props: SetCounter) => {

    const onSetHandler = () => {
        props.onClick()
    }

    return (
        <div className={s.window}>
            <div className={s.valueWindow}>
                <InputValue title={'max value'} value={props.maxValue} setValue={props.setMaxValue}/>
                <InputValue title={'start value'} value={props.startValue} setValue={props.setStartValue}/>
            </div>
            <div className={s.buttons}>
                <Button name={'set'} callBack={onSetHandler} disabledBtn={false}/>
            </div>
        </div>
    );
};

export default SetCounter;