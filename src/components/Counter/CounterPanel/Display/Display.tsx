import React from 'react';
import s from "../CounterPanel.module.css";

type DisplayPropsType = {
    value: number
    maxValue: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div>
            <div className={`${s.value} ${props.value >= props.maxValue ? s.colorError : ''}`}>{props.value}</div>
        </div>
    );
};

