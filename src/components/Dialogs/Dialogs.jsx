import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to="/dialogs/1">Platon</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/2">Alexey</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/3">Father</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/4">Gleb</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hello</div>
            <div className={s.message}>How is your domashka po reaktu?</div>
            <div className={s.message}>Nado testit</div>

        </div>
    </div>
}

export default Dialogs;