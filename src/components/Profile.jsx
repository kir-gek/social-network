import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
        <img src='https://yahont-hotel.ru/ckeditor_images/maxresdefault.jpg' />
        <div>
          Ava + description
        </div>
        <div>
          My post
          <div>
            New post
          </div>
          <div>
            <div className={s.item}>Post1</div>
            <div className={s.item}>Post2</div>
          </div>
        </div>
      </div>
    )
}

export default Profile;