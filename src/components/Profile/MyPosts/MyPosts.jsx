import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hey, how are you?', likeCount: 2},
        {id: 2, message: "It's my first post", likeCount: 13}
    ]

    let postsElements = posts.map( p => (<Post message={p.message} likeCount={p.likeCount}/>))

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