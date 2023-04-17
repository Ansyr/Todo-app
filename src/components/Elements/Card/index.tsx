import React, {ReactNode} from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

interface CardProp{
    children?: ReactNode;
    className?: string;
}
export const Card = (props : CardProp) => {
    return (
        <div className={clsx(styles.card,props.className)}>
            {props.children}
        </div>
    );
};
