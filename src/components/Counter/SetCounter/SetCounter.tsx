import React, {ChangeEvent, FC, useState} from 'react';
import s from './SetCounter.module.css'
import {Button} from "../CounterPanel/Button/Button";
import {InputValue} from "./InputValue/InputValue";

type SetCounter = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onStartValue: () => void
    error: string
    setValueChangeInput: (value: number) => void
    chekingErrorStartValue: (val: number) => void
    chekingErrorMaxValue: (val: number) => void
}

const SetCounter: FC<SetCounter> = ({
                                        maxValue,
                                        startValue,
                                        setMaxValue,
                                        setStartValue,
                                        onStartValue,
                                        setValueChangeInput,
                                        error,
                                        chekingErrorStartValue,
                                        chekingErrorMaxValue
                                    }) => {

    return (
        <div className={s.window}>
            <div className={s.valueWindow}>
                <InputValue
                    title={'max value'}
                    value={maxValue}
                    setValue={setMaxValue}
                    setValueChangeInput={setValueChangeInput}
                    chekingError={chekingErrorMaxValue}
                    error={error}
                />
                <InputValue
                    title={'start value'}
                    value={startValue}
                    setValue={setStartValue}
                    setValueChangeInput={setValueChangeInput}
                    chekingError={chekingErrorStartValue}
                    error={error}
                />
            </div>
            <div className={s.buttons}>
                <Button name={'set'} callBack={onStartValue} disabledBtn={error !== 'Enter value and press SET'}/>
            </div>
        </div>
    );
};

export default SetCounter;