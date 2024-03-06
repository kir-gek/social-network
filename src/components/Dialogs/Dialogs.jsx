import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const SelectedDialog = ({isActive}) => isActive ? s.active : s.dialog;

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} key={d.id}id={d.id}/>));
    let messagesElements = props.state.messages.map(m => (<Message message={m.message} key={m.id}/>));

    // let newMessage = React.createRef() // ВМесто рефа будем использовать event.target
    let sendMessage = () => {
        props.addMessage();
    }

    let addNewMessageTXTUI = (event) => { //объект event доступен внутри Колбэк функции
        let text = event.target.value
        props.addNewMessageTXT(text)       
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
            <button className={s.buttonAddMes} onClick={sendMessage}>Отправить сообщение</button>
        </div>
    );
}

export default Dialogs;