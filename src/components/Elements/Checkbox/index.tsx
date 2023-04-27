import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

interface CheckboxProps{
    checked?: boolean;
    disabled?: boolean;
    onChange?: (val: boolean) => void;
    onClick: () => void;
}

export const Checkbox = (props : CheckboxProps) => {
    const {checked,disabled,onClick} = props;
    return (
        <label>
            <input type="checkbox" className={clsx(styles.checkInput)} disabled={disabled} onChange={(e)=>e.target.checked} onClick={onClick}/>
            <span className={clsx(styles.checkBox,styles.active,styles.disabled,checked && styles.activeBox)}>
            </span>
        </label>)

};