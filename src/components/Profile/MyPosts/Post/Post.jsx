import s from './Post.module.css';

const Post = (props) => {
  return (    
    <div className={s.item}>
      <img className={s.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIG2FbEB3BTdJkvb5bx-hY0KeDlaB60We1oCiDZYQ6L9pstMRw6Y4jChGeRjMNkhRXbF8&usqp=CAU'/>
      {props.message}
      <div>
        <span>Like: {props.likeCount}</span>
      </div>
    </div>
  )
}

export default Post;