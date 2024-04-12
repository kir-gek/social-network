import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  
    return (
        <div>
            <img className={s.profileBack} src='https://yahont-hotel.ru/ckeditor_images/maxresdefault.jpg' />
            <div className={s.description}>
                <img src={props.imgProfile} className={s.ava}/>
                Обо мне {props.description}
            </div>
        </div>
    );
}

export default ProfileInfo;