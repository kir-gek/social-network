import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello? how are you?'},
                {id: 3, message: 'Hello? how are you?'},
                {id: 4, message: 'YO'}
            ],
            dialogs: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Marina'},
                {id: 4, name: 'John'},
                {id: 5, name: 'Bob'}
            ],
            // Текст в форме для нового сообщения
            newMessageTXT: 'mm'
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hey, how are you?', likeCount: 2},
                {id: 2, message: "It's my first post", likeCount: 13},
                {id: 3, message: "It's my first post", likeCount: 13},
                {id: 4, message: "It's my first post", likeCount: 13}
            ],
            // Текст в форме для нового поста
            newPostText: 'PP'
        },
        navBar: {
            friends: [
                {
                    id: 1,
                    imgURL: "https://bogatyr.club/uploads/posts/2023-02/thumbs/1677456604_bogatyr-club-p-avatarki-na-chernom-fone-foni-2.png",
                    name: 'Pasha'
                },
                {
                    id: 2,
                    imgURL: "https://sun9-59.userapi.com/impg/bA7IWNkRFev5QuLYyEYjg63pJmqDDfJBEsI2QQ/B3c-RuqwDvw.jpg?size=1620x2160&quality=95&sign=d228f845142ebd02df5abc21d63fe7df&type=album",
                    name: 'Ekaterina'
                },
                {id: 3, imgURL: "https://cdn.freelance.ru/images/att/1324133_900_600.png", name: 'Marina'}
            ]
        }
    },
    _callSubscriber() {
        // Локальная функция в которую приходит функция перерендера из индекса при вызове subscribe()
        console.log('state changed');
    },

    subscribe(observer) {
        // subscribe необходима для получения рендера дерева из index.
        // Когда приходит функция рендера из индекса, _callSubscriber() приравнивается к полученной функции из index
        this._callSubscriber = observer.bind(this);
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.navBar = navbarReducer(this._state.navBar,action);
        this._callSubscriber(this._state);
    }

}
window.store = store



export default store;
