import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src='https://yahont-hotel.ru/ckeditor_images/maxresdefault.jpg'/>
            <div className={s.description}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;