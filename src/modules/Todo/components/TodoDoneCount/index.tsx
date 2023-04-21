import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

interface TodoCountProps{
    children?:string;
    className?: string;
    toDoCount: number;

    toDoDoneCount: number;
}
export const TodoDoneCount = (props: TodoCountProps) => {

    return (
        <div className={styles.root}>
            <h2>
                Выполнено
            </h2>
            <div className={styles.counter}> {props.toDoDoneCount} из {props.toDoCount}</div>
        </div>
    );
};
