import React from 'react';
import styles from './styles.module.scss'
import {Card} from "@/components/Elements/Card";
import {Checkbox} from "@/components/Elements/Checkbox";
import {Trash} from "@/components/ui/svg/Trash/Trash";

interface ToDoCardProps{
    toDoText: string;
    toDoCounts: number;
    onClickTrash:any;
    onClick: () => void;

    checked: boolean;
    disabled: boolean;
}


export const TodoCard = (props: ToDoCardProps) => {
    const {toDoText,onClickTrash,disabled,checked,onClick} = props;
    return (
            <Card >
                <div className={styles.flex}>
                    <Checkbox  checked={checked} disabled={disabled} onClick={onClick} />
                    <p>
                        {String(toDoText)}
                    </p>
                    <Trash onClickTrash={onClickTrash}/>
                </div>

            </Card>


    );
};

