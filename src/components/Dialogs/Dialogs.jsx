import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const SelectedDialog = ({isActive}) => isActive ? s.active : s.dialog;

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={SelectedDialog}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Pasha" id="1"/>
                <DialogItem name="Masha" id="2"/>
                <DialogItem name="Marina" id="3"/>
                <DialogItem name="John" id="4"/>
                <DialogItem name="Bob" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello? how are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;