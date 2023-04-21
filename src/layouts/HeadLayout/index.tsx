import React from 'react';
import styles from './styles.module.scss'
;
import {Racket} from "../../components/ui/svg/Racket";

export const HeadLayout = () => {

    return (
        <div className={styles.root}>
            <Racket/>
            <h1>
                to<span>do</span>
            </h1>
        </div>
    );
};
