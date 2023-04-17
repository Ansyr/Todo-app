import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}
export const Button = (props :ButtonProps) => {
    const {children} = props
    return (
        <button className={clsx(styles.btn,props.className)}>
            {children}
        </button>
    );
};
