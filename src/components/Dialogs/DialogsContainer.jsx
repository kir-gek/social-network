import React from "react";
import { addNewMessageTXTUIActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
let sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
}

let addNewMessageTXT = (text) => {
    let action = addNewMessageTXTUIActionCreator(text);
    props.dispatch(action)
}

return (
    <Dialogs state={props.state}
        addMessage={sendMessage}
        addNewMessageTXT={addNewMessageTXT} />
);
}
export default DialogsContainer;