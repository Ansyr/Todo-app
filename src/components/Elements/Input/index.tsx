import React, {HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, useState} from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
    "value" |"onChange"
>;

interface InputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
}


export const Input = (props : InputProps) => {
    const {placeholder,type,value,onChange,className} = props
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <input className={clsx(styles.inputTodo,className)} type={type} placeholder={placeholder} value={value} onChange={onChangeHandler}/>
    );
};