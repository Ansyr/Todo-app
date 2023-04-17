import React, {ReactNode} from 'react';
import {TodoCount} from "@/modules/Todo/components/TodoCount";
import {TodoDoneCount} from "@/modules/Todo/components/TodoDoneCount";
import styles from './styles.module.scss'
import clsx from "clsx";

interface TodoHeader{
    className?:string;
}
export const TodoHeader = (props: TodoHeader) => {
    return (
        <div className={clsx(styles.headTodo,props.className)}>
            <TodoCount/>
            <TodoDoneCount/>
        </div>
    );
};

