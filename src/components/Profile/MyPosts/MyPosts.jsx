import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => (<Post message={p.message} likeCount={p.likeCount}/>))

    return (
        <div className={s.myPosts}>
            <h3>My post</h3>
            <div>New post
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;