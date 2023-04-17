import React from 'react';
import styles from './styles.module.scss'

export const Input = () => {
    return (
        <input className={styles.inputTodo} type="text" placeholder={'Введите задачу'}/>
    );
};

