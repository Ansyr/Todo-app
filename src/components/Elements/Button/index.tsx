import React, {ButtonHTMLAttributes, MouseEvent, ReactNode} from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    children: ReactNode;
}
export const Button = (props :ButtonProps) => {
    const {children,className,onClick,type} = props
    return (
        <button className={clsx(styles.btn,className)} onClick={onClick} type={type}>
            {children}
        </button>
    );
};
