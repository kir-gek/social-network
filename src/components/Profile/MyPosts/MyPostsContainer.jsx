import React from "react";
import { addNewPostTextActionCreator, addPostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import { connect } from "react-redux";

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let addPost = () => {
//                         // alert(newPostElement.current.value);
//                         store.dispatch(addPostActionCreator())
//                     }

//                     let addNewPostText = (text) => {
//                         let action = addNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     }

//                     const state = store.getState();
//                     const profilePage = state.profilePage
//                     return (
//                         <MyPosts addNewPostText={addNewPostText}
//                             addPost={addPost}
//                             posts={profilePage.posts}
//                             newPostText={profilePage.newPostText} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateTpProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPostText: (text) => {
            let action = addNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateTpProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;
