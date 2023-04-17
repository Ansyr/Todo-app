import React from 'react';
import styles from './styles.module.scss'
import {HeadLayout} from "@/layouts/HeadLayout";
import {CreateForm} from "@/features/Todo/components/CreateForm";
import {TodoHeader} from "@/features/Todo/components/TodoHeader";
import {Container} from "@/layouts/Container";
import {ListEmpty} from "../../features/Todo/components/ListEmpty";
import {TodoList} from "@/features/Todo/components/TodoList";


export const TasksList = () => {
    return (
        <div className={styles.main}>
            <HeadLayout/>
            <Container>
                <CreateForm className={styles.form}/>
                <TodoHeader className={styles.headTodo}/>
                <TodoList  />

                {/*<ListEmpty/>*/}

            </Container>
        </div>
    );
};

