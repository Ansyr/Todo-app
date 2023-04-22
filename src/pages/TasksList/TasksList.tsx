import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import {HeadLayout} from "@/layouts/HeadLayout";
import {CreateForm} from "@/modules/Todo/components/CreateForm";
import {TodoHeader} from "@/modules/Todo/components/TodoHeader";
import {Container} from "@/layouts/Container";
import {ListEmpty} from "@/modules/Todo/components/ListEmpty";
import {TodoCard} from "@/modules/Todo/components/TodoCard";

type ToDo = {
    id: number;
    title: string;
    active: boolean;
}
export const TasksList = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const [text,setText] = useState('')


    useEffect(()=>{
        if (!localStorage.getItem('tasks')) return;
        const items = localStorage.getItem('tasks') || '[]';
        const json = JSON.parse(items) as ToDo[];
        setTodos(json);
    },[])

    const saveTodos = (tasks: ToDo[]) => {
        setTodos(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    const onClickAddTodo = (e) => {
        e.preventDefault();
        if (text !== '') {
            saveTodos([...todos, {
                id:todos.length,
                active: false,
                title: text,
            }])
        }
        setText('');

    }

    const onClickDelete = (index : number) =>{
        const newTodos = todos.filter((todo) => todo.id !== index)
        saveTodos([...newTodos])
    }

    const onClickActive = (index: number) => {
       const newTodos = [...todos];
       const current = newTodos.find(todo => todo.id === index);
       current.active = !current.active;
       saveTodos(newTodos)

    }
    const todosItem: any = todos?.map((todo)=> <TodoCard toDoText={todo.title} key={todo.id} onClickTrash={()=>onClickDelete(todo.id)} onClick={()=>onClickActive(todo.id)} checked={todo.active}/>)

    return (
        <div className={styles.main}>
            <HeadLayout/>
            <Container>
                <CreateForm className={styles.form} onClick={(e) => onClickAddTodo(e)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} value={text} onSubmit={(e:React.ChangeEvent<HTMLInputElement>) => console.log(e)}/>
                <TodoHeader className={styles.headTodo} toDoCount={todosItem.length} toDoDoneCount={todos.filter(todo => todo.active).length} />
                <div className={styles.container}>
                    {
                        todosItem.length === 0?<ListEmpty/>:todosItem
                    }
                </div>
            </Container>
        </div>
    );
};

