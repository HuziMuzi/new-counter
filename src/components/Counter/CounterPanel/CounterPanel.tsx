import React from 'react';
import s from './CounterPanel.module.css'
import {Button} from "./Button/Button";
import {Display} from "./Display/Display";

type CounterPanel = {
    startValue: number
    value: number
    onClickPlus: () => void
    onClickReset: () => void
    maxValue: number
    error: string
}

export const CounterPanel = (props: CounterPanel) => {

    return (
        <div className={s.window}>
            <div className={s.windowValue}>
                <Display value={props.value} maxValue={props.maxValue} error={props.error}/>
            </div>
            <div className={s.buttons}>
                <Button name={'inc'} callBack={props.onClickPlus}
                        disabledBtn={props.value === props.maxValue || !!props.error}/>
                <Button name={'reset'} callBack={props.onClickReset}
                        disabledBtn={props.value === props.startValue || !!props.error}/>
            </div>
        </div>
    );
};

