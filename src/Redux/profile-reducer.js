const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TXT = 'ADD-NEW-POST-TXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push(
                {id: 5, message: state.newPostText, likeCount: 0}
            );
            state.newPostText = '';
            return state;
        case ADD_NEW_POST_TXT:
            state.newPostText = action.newPostTXT;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}); //КОГДА ОБЕРНУЛИ В КРУГЛЫЕ СКОБОЧКИ ТО ЗНАЧИТ ЧТО ВОЗВРАЩАЕМ ОБЪЕКТ
export const addNewPostTextActionCreator = (text) => ({type: ADD_NEW_POST_TXT, newPostTXT: text})
export default profileReducer;