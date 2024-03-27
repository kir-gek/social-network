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
        case ADD_POST:
            let newPost = state.newPostText
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: newPost, likeCount: 0 }],
                newPostText: ''
            };
        case ADD_NEW_POST_TXT:
            return {
                ...state,
                newPostText: action.newPostTXT
            };
        default:
            return state;
    }
}
export const addPost = () => ({ type: ADD_POST }); //КОГДА ОБЕРНУЛИ В КРУГЛЫЕ СКОБОЧКИ ТО ЗНАЧИТ ЧТО ВОЗВРАЩАЕМ ОБЪЕКТ
export const addNewPostText = (text) => ({ type: ADD_NEW_POST_TXT, newPostTXT: text })
export default profileReducer;