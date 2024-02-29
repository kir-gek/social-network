import React from "react";
import { addNewMessageTXTUIActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    let addNewMessageTXT = (text) => {
                        let action = addNewMessageTXTUIActionCreator(text);
                        store.dispatch(action)
                    }
                    const state = store.getState()
                    const dialogsPage = state.dialogsPage
                    return (
                        <Dialogs state={dialogsPage}
                            addMessage={sendMessage}
                            addNewMessageTXT={addNewMessageTXT} />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}
export default DialogsContainer;
