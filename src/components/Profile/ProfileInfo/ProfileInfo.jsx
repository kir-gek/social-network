import s from './ProfileInfo.module.css';
import profile from "../Profile";

const ProfileInfo = (props) => {
  
    return (
        <div>
            <img className={s.profileBack} src='https://yahont-hotel.ru/ckeditor_images/maxresdefault.jpg' />
            <div className={s.description}>
                <img src={props.imgProfile} />
                Обо мне {props.description}
            </div>
        </div>
    );
}

export default ProfileInfo;