import React, {HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, useState} from 'react';
import styles from './styles.module.scss'


interface InputProps{
    value:string;
    onChange:any;
    type?:HTMLInputTypeAttribute;
    placeholder?: string;

}


export const Input = (props : InputProps) => {
    const {placeholder,type,value,onChange} = props
    return (
        <input className={styles.inputTodo} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    );
};

