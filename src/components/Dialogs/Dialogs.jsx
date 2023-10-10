import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const SelectedDialog = ({isActive}) => isActive ? s.active : s.dialog;

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));
    let messagesElements = props.state.messages.map(m => (<Message message={m.message}/>));

    let newMessage = React.createRef()
    let sendMessage = () => {
        alert(newMessage.current.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessage}></textarea>
            <button onClick={sendMessage}>Отправить сообщение</button>
        </div>
    );
}

export default Dialogs;