import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (

    <div>
      My post
      <div>New post
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <Post message='Hey, how are you?' likeCount='2'/>
      <Post message="It's my first post" likeCount='13'/>
    </div>
  )
}

export default MyPosts;