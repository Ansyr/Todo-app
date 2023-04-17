import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";
import {Card} from "@/components/Elements/Card";
import {Checkbox} from "@/components/Elements/Checkbox";
import {Trash} from "@/components/ui/svg/Trash/Trash";

export const TodoList = () => {
    return (
        <div className={styles.container}>
            <Card >
                <div className={styles.flex}>
                    <Checkbox/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dignissimos dolorum et eveniet expedita fugiat ipsa iste maxime nisi rerum, tenetur ullam velit? Fugit odit possimus sapiente? Dolore, expedita?
                    </p>



                    <Trash/>
                </div>

            </Card>

        </div>
    );
};

