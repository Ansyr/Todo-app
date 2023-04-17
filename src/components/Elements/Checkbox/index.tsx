import React, {InputHTMLAttributes} from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

interface CheckboxProps{
    checked?: boolean;
    disabled?: boolean;
    onChange?: (val: boolean) => void;
}

export const Checkbox = (props : CheckboxProps) => {
    const {checked,disabled} = props;
    return (
        <label>
            <input type="checkbox" className={clsx(styles.checkInput)} checked={checked} disabled={disabled} onChange={(e)=>e.target.checked}/>
            <span className={clsx(styles.checkBox,styles.active,styles.disabled,checked && styles.activeBox)}>
            </span>
        </label>)

};
