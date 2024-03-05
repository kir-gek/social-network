import { followAС, setUsersAC, unfollowAС } from "../../Redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{

    return{
        state: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userID) => {
            dispatch(followAС(userID))
        },
        unfollow: (userID) =>{
            dispatch(unfollowAС(userID))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;