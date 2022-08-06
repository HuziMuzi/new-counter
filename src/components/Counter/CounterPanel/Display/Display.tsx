import React from 'react';
import s from "../CounterPanel.module.css";

type DisplayPropsType = {
    value: number
    maxValue: number
    error: string
}

export const Display = (props: DisplayPropsType) => {

    const classNameError = props.error === 'Incorrect value' ? s.errorMessage : s.alarmMessage
    const classNameMaxValue = props.value === props.maxValue ? s.colorError : ''
    return (
        <div className={`${s.value} ${props.error ? classNameError : classNameMaxValue}`}>
            {props.error ? props.error : props.value}
        </div>

    );
};

