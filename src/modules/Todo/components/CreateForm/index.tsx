import React from 'react';
import styles from './styles.module.scss'
import {Input} from "@/components/Elements/Input";
import {Button} from "@/components/Elements/Button";
import {PlusIcon} from "@/components/ui/svg/PlusIcon";
import clsx from "clsx";

interface CreateFormProps{
    className?: string;
}

export const CreateForm = (props: CreateFormProps) => {

    return (
        <div className={clsx(styles.form,props.className)}>
            <Input/>
            <Button className={styles.btn}>
                Добавить <PlusIcon/>
            </Button>
        </div>
    );
};

