import { followAС, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAС } from "../../Redux/users-reducer";
import { connect } from "react-redux";
import axios from 'axios'
import React from 'react'
import { Users } from './Users'


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countOnPages}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countOnPages}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                
            })
    }

    render() {

      
        return <Users setCurrentPage={this.setCurrentPage}
        totalCount={this.props.totalCount}
        countOnPages={this.props.countOnPages}
        currentPage={this.props.currentPage}
        users={this.props.state.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}

        />         
        

    }
}

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

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer);