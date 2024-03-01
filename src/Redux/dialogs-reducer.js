const ADD_MESSAGE_TXT = 'ADD-MESSAGE-TXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello? how are you?' },
        { id: 3, message: 'Hello? how are you?' },
        { id: 4, message: 'YO' }
    ],
    dialogs: [
        { id: 1, name: 'Pasha' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Marina' },
        { id: 4, name: 'John' },
        { id: 5, name: 'Bob' }
    ],
    // Текст в форме для нового сообщения
    newMessageTXT: 'mm'
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageTXT
            return {
                ...state,
                messages: [...state.messages, { id: 3, message: newMessage }],
                newMessageTXT: ''
            };
        case ADD_MESSAGE_TXT:
            return {
                ...state,
                newMessageTXT: action.newMessageTXT
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const addNewMessageTXTUIActionCreator = (text) => ({ type: ADD_MESSAGE_TXT, newMessageTXT: text })

export default dialogsReducer;