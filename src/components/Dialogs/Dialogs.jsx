import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageTXTUIActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";

const SelectedDialog = ({isActive}) => isActive ? s.active : s.dialog;

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));
    let messagesElements = props.state.messages.map(m => (<Message message={m.message}/>));

    // let newMessage = React.createRef() // ВМесто рефа будем использовать event.target
    let sendMessage = () => {
        // props.addMessage();
        props.dispatch(sendMessageActionCreator())
    }

    let addNewMessageTXTUI = (event) => { //объект event доступен внутри Колбэк функции
        // props.addNewMessageTXT(newMessage.current.value)
        let text = event.target.value
        let action = addNewMessageTXTUIActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea value={props.state.newMessageTXT} onChange={addNewMessageTXTUI}></textarea>
            <button onClick={sendMessage}>Отправить сообщение</button>
        </div>
    );
}

export default Dialogs;