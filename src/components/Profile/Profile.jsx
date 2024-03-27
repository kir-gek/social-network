import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Preloader } from '../common/Preloader';

const Profile = (props) => {
    if (!props.profile) return <Preloader />
    return (
        <div>
            <ProfileInfo imgProfile={props.profile.photos.large} description={props.profile.aboutMe}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;

