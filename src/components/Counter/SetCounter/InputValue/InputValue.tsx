import React, {ChangeEvent, useState} from 'react';
import s from './InputValue.module.css'


type InputValueType = {
    title: string
    value: number
    setValue: (value :number) => void
}

export const InputValue = (props: InputValueType) => {

    return (
        <div>
            <div className={s.valueWindow}>
                <div className={s.setInput}>
                    <div className={s.name}>{props.title}:</div>
                    <input className={s.input} type="number" value={props.value} onChange={
                        (e:ChangeEvent<HTMLInputElement>)=>{props.setValue(e.currentTarget.valueAsNumber)}}/>
                </div>
            </div>

        </div>
    );
};

