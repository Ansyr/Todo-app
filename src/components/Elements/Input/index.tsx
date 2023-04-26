import React, {HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, useState} from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";


interface InputProps{
    value:string;
    onChange:any;
    type?:HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
}


export const Input = (props : InputProps) => {
    const {placeholder,type,value,onChange,className} = props
    return (
        <input className={clsx(styles.inputTodo,className)} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    );
};

