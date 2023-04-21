import React, {ReactNode} from 'react';
import {TodoCount} from "@/modules/Todo/components/TodoCount";
import {TodoDoneCount} from "@/modules/Todo/components/TodoDoneCount";
import styles from './styles.module.scss'
import clsx from "clsx";

interface TodoHeaderProps{
    className?:string;
    toDoCount: number;
    toDoDoneCount:number;
}
export const TodoHeader = (props: TodoHeaderProps) => {
    const {toDoCount,toDoDoneCount} = props;
    return (
        <div className={clsx(styles.headTodo,props.className)}>
            <TodoCount toDoCount={toDoCount}/>
            <TodoDoneCount toDoDoneCount={toDoDoneCount} toDoCount={toDoCount}/>
        </div>
    );
};

