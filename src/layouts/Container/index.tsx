import React, {ReactNode} from 'react';
import styles from './styles.module.scss'

interface ContainerProps{
    children?:ReactNode;
}
export const Container = (props : ContainerProps) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};
