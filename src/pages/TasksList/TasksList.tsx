import React from 'react';
import styles from './styles.module.scss'
import {HeadLayout} from "@/layouts/HeadLayout";
import {CreateForm} from "@/modules/Todo/components/CreateForm";
import {TodoHeader} from "@/modules/Todo/components/TodoHeader";
import {Container} from "@/layouts/Container";
import {ListEmpty} from "@/modules/Todo/components/ListEmpty";
import {TodoCard} from "@/modules/Todo/components/TodoCard";


export const TasksList = () => {
    return (
        <div className={styles.main}>
            <HeadLayout/>
            <Container>
                <CreateForm className={styles.form}/>
                <TodoHeader className={styles.headTodo}/>
                <div className={styles.container}>
                    <TodoCard/>
                    <TodoCard/>
                    <TodoCard/>
                    <TodoCard/>
                    <TodoCard/>
                    <TodoCard/>
                    <TodoCard/>
                </div>
                {/*<ListEmpty/>*/}
            </Container>
        </div>
    );
};

