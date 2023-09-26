import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://cdn.iz.ru/sites/default/files/article-2019-10/3_2.jpg'/>
      Post1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post;