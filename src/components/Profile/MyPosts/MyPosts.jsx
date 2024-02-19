import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => (<Post message={p.message} likeCount={p.likeCount}/>))

    let newPostElement = React.createRef();
    
    let addPostUI = () => {
        props.addPost()
    }

    let onPostChange =() =>{
        let text = newPostElement.current.value;
        props.addNewPostText(text)
    }

    return (
        <div className={s.myPosts}> 
            <h3>My post</h3>
            <div>New post
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <button onClick={addPostUI}>Add post
                </button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;