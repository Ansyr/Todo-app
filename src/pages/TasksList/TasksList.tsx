import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import {HeadLayout} from "@/layouts/HeadLayout";
import {CreateForm} from "@/modules/Todo/components/CreateForm";
import {TodoHeader} from "@/modules/Todo/components/TodoHeader";
import {Container} from "@/layouts/Container";
import {ListEmpty} from "@/modules/Todo/components/ListEmpty";
import {TodoCard} from "@/modules/Todo/components/TodoCard";
import clsx from "clsx";
import {Button} from "@/components/Elements/Button";

const sortBtns = ['Все', 'Активные', 'Запланированные']

type ToDo = {
    id: number;
    title: string;
    active: boolean;
}
export const TasksList = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);
    const [sortedTodos, setSortedTodos] = useState<ToDo[]>([])
    const [text, setText] = useState('')
    const [update,setUpdate] = useState(false);

    const [redactText, setRedactText] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('tasks')) return;
        const items = localStorage.getItem('tasks') || '[]';
        const json = JSON.parse(items) as ToDo[];
        setTodos(json);
        setSortedTodos(json)
    }, [])

    const saveTodos = (tasks: ToDo[]) => {
        setTodos(tasks);
        setSortedTodos(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    const onClickAddTodo = (e, text) => {
        e.preventDefault();
        if (text !== '') {
            saveTodos([...todos, {
                id: todos.length,
                active: false,
                title: text,
            }])
        }
        setText('');

    }

    const onClickDelete = (index: number) => {
        const newTodos = todos.filter((todo) => todo.id !== index)
        saveTodos([...newTodos])
    }

    const onClickActive = (index: number) => {
        const newTodos = [...todos];
        const current = newTodos.find(todo => todo.id === index);
        if (current) {
            current.active = !current.active;
            saveTodos(newTodos)
        }
    }

    const onClickSort = (id) => {
        const filteredTodos = todos.filter(todo => {
            if (id === 1) {
                return todo.active
            }
            if (id === 2) {
                return !todo.active
            }
            return todos
        })
        setSortedTodos(filteredTodos)
    }

    const onSubmitRedactTodo = (e, id) => {
        e.preventDefault();
        const newTodos = [...todos];
        const current = newTodos.find(todo => todo.id === id);
        if (current) {
            current.title = redactText;
            saveTodos(newTodos)
        }
    }


    const todosItem: any = sortedTodos?.map((todo) => <TodoCard
            toDoText={todo.title}
            key={todo.id}
            onClickTrash={() => onClickDelete(todo.id)}
            onClick={() => onClickActive(todo.id)}
            checked={todo.active}
            onChange={(e) => setRedactText(e.target.value)}
            onSubmit={(e) => onSubmitRedactTodo(e, todo.id)}
            setUpdate={()=>setUpdate(!update)}
            update={update}
        />
    )


    return (
        <div className={styles.main}>
            <HeadLayout/>
            <Container>
                <CreateForm
                    className={styles.form}
                    onClick={(e) => onClickAddTodo(e, text)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    value={text}

                    onSubmit={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)}
                />
                <TodoHeader
                    className={styles.headTodo}
                    toDoCount={todosItem.length}
                    toDoDoneCount={todos.filter(todo => todo.active).length}/>
                <div className={styles.container}>
                    {
                        todosItem.length === 0 ? <ListEmpty/> : todosItem
                    }
                </div>
                <div className={clsx(styles.sortBtns, styles.containerSort)}>
                    {
                        sortBtns.map((sortBtn, i) => <Button onClick={() => onClickSort(i)} key={i}>{sortBtn}</Button>)
                    }
                </div>

            </Container>
        </div>
    );
};

