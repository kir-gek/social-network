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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts;