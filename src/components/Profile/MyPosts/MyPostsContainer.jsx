import React from "react";
import { addNewPostTextActionCreator, addPostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let addPost = () => {
                        // alert(newPostElement.current.value);
                        store.dispatch(addPostActionCreator())
                    }

                    let addNewPostText = (text) => {
                        let action = addNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    const state = store.getState();
                    const profilePage = state.profilePage
                    return (
                        <MyPosts addNewPostText={addNewPostText}
                            addPost={addPost}
                            posts={profilePage.posts}
                            newPostText={profilePage.newPostText} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;


// profilePage={props.state.profilePage} dispatch={props.dispatch}
// profilePage={props.profilePage} dispatch={props.dispatch}