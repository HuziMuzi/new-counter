import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabledBtn: boolean
}

export const Button = (props: ButtonPropsType) => {

    // const onClickCallBack = () => {
    //
    //     //
    //     //
    //     //
    //     props.callBack()
    // }

    return (
        <div className={s.btnBlock}>
            <button
                className={s.btn}
                onClick={props.callBack}
                disabled={props.disabledBtn}
            >{props.name}</button>
        </div>
    );
};

