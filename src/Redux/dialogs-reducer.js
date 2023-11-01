const ADD_MESSAGE_TXT = 'ADD-MESSAGE-TXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push(
                {id: 3, message: state.newMessageTXT}
            )
            state.newMessageTXT = '';
            return state;
        case ADD_MESSAGE_TXT:
            state.newMessageTXT = action.newMessageTXT;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: ADD_MESSAGE})
export const addNewMessageTXTUIActionCreator = (text) => ({type: ADD_MESSAGE_TXT, newMessageTXT: text})

export default dialogsReducer;