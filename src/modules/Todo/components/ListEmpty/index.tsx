import React from 'react';
import {Clipboard} from "@/components/ui/svg/Clipboard";
import styles from './styles.module.scss'
import clsx from "clsx";

export const ListEmpty = () => {
    return (
        <div className={styles.root}>
            <div className={clsx(styles.line)}></div>
            <Clipboard className={styles.lineMr}/>
            <p>
                У вас еще нет зарегистрированных задач
                <span>
                    <br/>Создавайте задачи и упорядочивайте свои задачи
                </span>
            </p>

        </div>
    );
};
