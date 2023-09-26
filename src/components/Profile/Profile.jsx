import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <img src='https://yahont-hotel.ru/ckeditor_images/maxresdefault.jpg' />
      <div>
        Ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;