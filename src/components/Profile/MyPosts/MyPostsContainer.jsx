import React from "react";
import { addNewPostTextActionCreator, addPostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let addPost = () => {
        // alert(newPostElement.current.value);
        props.dispatch(addPostActionCreator())
    }

    let addNewPostText = (text) => {
        let action = addNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <MyPosts addNewPostText={addNewPostText}
            addPost={addPost}
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText} />
    )
}

export default MyPostsContainer;
