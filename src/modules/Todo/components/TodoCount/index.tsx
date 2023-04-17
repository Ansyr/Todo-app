import React from 'react';
import styles from './styles.module.scss'

interface TodoCountProps{
    children?:string;
    className?: string;
}
export const TodoCount = (props: TodoCountProps) => {

    return (
        <div className={styles.root}>
            <h2>
                Созданные задачи
            </h2>
            <div className={styles.counter}> 0</div>
        </div>
    );
};
