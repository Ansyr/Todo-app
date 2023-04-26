import React, {useState} from 'react';
import styles from './styles.module.scss'
import {Card} from "@/components/Elements/Card";
import {Checkbox} from "@/components/Elements/Checkbox";
import {Trash} from "@/components/ui/svg/Trash/Trash";
import Redact from "@/components/ui/svg/Redact";
import {Input} from "@/components/Elements/Input";

interface ToDoCardProps {
    toDoText: string;
    toDoCounts: number;
    onClickTrash: () => void;
    onClick?: () => void;
    onClickRedact?:(id:number) => void

    value?: string
    disabled?:boolean

    checked?: boolean;
    onChange?: any;
    onSubmit: any;

    setUpdate?:() => void;
    upadate?:boolean;
}


export const TodoCard = (props: ToDoCardProps) => {
    const {
        toDoText,
        onClickTrash,
        disabled,
        checked,
        onClick,
        onChange,
        onSubmit,
        value,
    } = props;
    const [update,setUpdate] = useState(false)
    return (
        <Card>
            <div className={styles.flex}>
                <Checkbox checked={checked} disabled={disabled} onClick={onClick}/>
                <p>
                    {String(toDoText)}
                </p>
                <div className={styles.cardOptions}>
                    <Redact className={styles.mt15} onClick={() => setUpdate(!update)}/>
                    <Trash onClickTrash={onClickTrash}/>
                </div>

            </div>
            {
            update &&
              <form onSubmit={onSubmit}>
                    <Input value={value} onChange={onChange} className={styles.redactInput}/>
                </form>
            }



        </Card>


    );
};

