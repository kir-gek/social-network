const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TXT = 'ADD-NEW-POST-TXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hey, how are you?', likeCount: 2 },
        { id: 2, message: "It's my first post", likeCount: 13 },
        { id: 3, message: "It's my first post", likeCount: 13 },
        { id: 4, message: "It's my first post", likeCount: 13 }
    ],
    // Текст в форме для нового поста
    newPostText: 'PP'
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(
                { id: 5, message: state.newPostText, likeCount: 0 }
            );
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case ADD_NEW_POST_TXT: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newPostTXT;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST }); //КОГДА ОБЕРНУЛИ В КРУГЛЫЕ СКОБОЧКИ ТО ЗНАЧИТ ЧТО ВОЗВРАЩАЕМ ОБЪЕКТ
export const addNewPostTextActionCreator = (text) => ({ type: ADD_NEW_POST_TXT, newPostTXT: text })
export default profileReducer;