import React from 'react';
import styles from './styles.module.scss'
import {Input} from "@/components/Elements/Input";
import {Button} from "@/components/Elements/Button";
import {PlusIcon} from "@/components/ui/svg/PlusIcon";
import clsx from "clsx";


interface CreateFormProps{
    className?: string;
    onClick:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
    onChange?: (value: string) => void;
    placeholder?: string;
    value: string;
    onSubmit?:() => void
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

