import { followAС, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAС } from "../../Redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{

    return{
        state: state.usersPage,
        countOnPages: state.usersPage.countOnPages,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage) =>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalNumber) =>{
            dispatch(setTotalUsersCountAC(totalNumber))
        }
    }
}
const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;