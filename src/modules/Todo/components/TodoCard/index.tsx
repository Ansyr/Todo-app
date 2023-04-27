import React, {useState} from 'react';
import styles from './styles.module.scss'
import {Card} from "@/components/Elements/Card";
import {Checkbox} from "@/components/Elements/Checkbox";
import {Trash} from "@/components/ui/svg/Trash/Trash";
import Redact from "@/components/ui/svg/Redact";
import {Input} from "@/components/Elements/Input";


type ToDo = {
    id: number;
    title: string;
    active: boolean;
}
interface ToDoCardProps {
    onClickTrash?: () => void;
    onClick?: () => void;
    onClickRedact?:(id:number) => void
    onSubmit?: (e: React.ChangeEvent<HTMLFormElement>) => void;
    todo: ToDo;
    todos: ToDo[];
    saveTodos: (todos:ToDo[]) => void
}


export const TodoCard = (props: ToDoCardProps) => {
    const {
        todo,
        todos,
        saveTodos
    } = props;


    const [update,setUpdate] = useState(false)
    const [redactText, setRedactText] = useState('');

    const onSubmitRedactTodo = (e: React.ChangeEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        const newTodos = [...todos];
        const current = newTodos.find(todo => todo.id === id);
        if (current) {
            current.title = redactText;
            saveTodos(newTodos)
            setUpdate(!update)
        }
    }

    const onClickActive = (id: number) => {
        const newTodos = [...todos];

        const current = newTodos.find(todo => todo.id === id);
        if (current) {
            current.active = !current.active;
            saveTodos(newTodos)
        }
    }

    const onClickDelete = (id: number) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        saveTodos([...newTodos])
    }

    return (
        <Card>
            <div className={styles.flex}>
                <Checkbox checked={todo.active}  onClick={() => onClickActive(todo.id)}/>
                <p>
                    {String(todo.title)}
                </p>
                <div className={styles.cardOptions}>
                    <Redact className={styles.mt15} onClick={() => setUpdate(!update)}/>
                    <Trash onClickTrash={() => onClickDelete(todo.id)}/>
                </div>

            </div>
            {
                update &&
                <form onSubmit={(e:React.ChangeEvent<HTMLFormElement>) => onSubmitRedactTodo(e, todo.id)}>
                    <Input value={redactText} onChange={setRedactText} className={styles.redactInput}/>
                </form>
            }

        </Card>


    );
};