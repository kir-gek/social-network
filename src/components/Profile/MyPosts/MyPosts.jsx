import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => (<Post message={p.message} likeCount={p.likeCount}/>))

let newPostElement = React.createRef();
    let addPost = () => { alert(newPostElement.current.value);}

    return (
        <div className={s.myPosts}>
            <h3>My post</h3>
            <div>New post
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>Add post
                </button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;