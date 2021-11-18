import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div>
                <DialogItem name="Platon" id="1"/>
            </div>
            <div className={s.dialog}>
                <DialogItem name="Iona" id="2"/>
            </div>
            <div className={s.dialog}>
                <DialogItem name="Dmitry Petrov" id="3"/>
            </div>
            <div className={s.dialog}>
                <DialogItem name="Gleb" id="4"/>
            </div>
        </div>
        <div className={s.messages}>
            <Message message="Hi"/>
            <Message message="How is your domashka po reactu?"/>
            <Message message="Nado testit"/>
        </div>
    </div>
}

export default Dialogs;