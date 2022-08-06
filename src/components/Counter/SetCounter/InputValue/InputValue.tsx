import React, { ChangeEvent, useState } from 'react';
import './InputValue.css'


type InputValueType = {
    title: string
    value: number
    setValue: (value: number) => void
    setValueChangeInput: (value : number | null) => void
    chekingError:(val: number) => void
    error: string
}

export const InputValue = (props: InputValueType) => {

    const classStyleInput =  `'input' ${props.error === 'Incorrect value' ? 'error' : ''}
`
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(+e.currentTarget.value)
        props.setValueChangeInput(null)
        props.chekingError(+e.currentTarget.value)
    }

    return (
        <div>
            <div className='valueWindow'>
                <div className='setInput'>
                    <div className='name'>{props.title}:</div>
                    <input className={classStyleInput} type="number" value={props.value} onChange={onChange} />
                </div>
            </div>

        </div>
    );
};

