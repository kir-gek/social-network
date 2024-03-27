import React from "react";
import { addNewMessageTXT, addMessage } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let sendMessage = () => {
//                         store.dispatch(sendMessageActionCreator())
//                     }

//                     let addNewMessageTXT = (text) => {
//                         let action = addNewMessageTXTUIActionCreator(text);
//                         store.dispatch(action)
//                     }
//                     const state = store.getState()
//                     const dialogsPage = state.dialogsPage
//                     return (
//                         <Dialogs state={dialogsPage}
//                             addMessage={sendMessage}
//                             addNewMessageTXT={addNewMessageTXT} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(sendMessageActionCreator())
//         },
//         addNewMessageTXT: (text) => {
//             let action = addNewMessageTXTUIActionCreator(text);
//             dispatch(action)
//         }
//     }
// }
const DialogsContainer = connect(mapStateToProps, {addMessage, addNewMessageTXT}) (Dialogs);
export default DialogsContainer;
