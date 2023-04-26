import React, {HTMLInputTypeAttribute, useCallback, useState} from 'react';
import styles from './styles.module.scss'
import {Input} from "@/components/Elements/Input";
import {Button} from "@/components/Elements/Button";
import {PlusIcon} from "@/components/ui/svg/PlusIcon";
import clsx from "clsx";
import {TodoCard} from "@/modules/Todo/components/TodoCard";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

interface CreateFormProps{
    className?: string;
    onClick:(e: React.ChangeEvent<HTMLInputElement>)=>void;

    onChange:any;
    placeholder?: string;
    value: string;


    onSubmit?:any
}


export const CreateForm = (props: CreateFormProps) => {
    const {value,onChange,onClick,onSubmit} = props;
    return (
        <div className={clsx(styles.form,props.className)} >
            <form onSubmit={onSubmit} className={styles.form}>
            <Input className={styles.inputTodo} value={value} onChange={onChange} />
            <Button type={'submit'} className={styles.btn} onClick={onClick}>
                Добавить <PlusIcon/>
            </Button>
            </form>
        </div>
    );
};

