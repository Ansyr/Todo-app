import React from 'react';
import styles from './styles.module.scss'

interface TodoCountProps{
    children?:string;
    className?: string;
    toDoCount: number;
}
export const TodoCount = (props: TodoCountProps) => {

    return (
        <div className={styles.root}>
            <h2>
                Созданные задачи
            </h2>
            <div className={styles.counter}>{props.toDoCount}</div>
        </div>
    );
};
