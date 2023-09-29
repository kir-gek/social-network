import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div className={s.myPosts}>
            <h3>My post</h3>
            <div>New post
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <Post message='Hey, how are you?' likeCount='2'/>
            <Post message="It's my first post" likeCount='13'/>
        </div>
    )
}

export default MyPosts;