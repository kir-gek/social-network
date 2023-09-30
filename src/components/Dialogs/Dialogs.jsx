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

    let dialogsData = [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Marina'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Bob'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello? how are you?'},
        {id: 3, message: 'Hello? how are you?'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},
        {id: 6, message: 'YO'}
    ]


    let dialogsElements = dialogsData.map(d => (<DialogItem name={d.name} id={d.id}/>));
    let messagesElements = messages.map(m => (<Message message={m.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;