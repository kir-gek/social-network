import s from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import React from 'react'


class Users extends React.Component {

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

        let pages = []

        let totalPages = Math.ceil(this.props.totalCount / this.props.countOnPages)

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
        return (
            <div className={s.wrapperALL}>
                {pages.map(p => (<span onClick={(e) => { this.setCurrentPage(p) }} className={this.props.currentPage === p && s.selectedPage}> {p} </span>))}

                {this.props.state.users.map(el => (
                    <div className={s.wrapper}>
                        <img src={(el.photos.small === null) ? userPhoto : el.photos.small} />
                        {el.follow ? <button onClick={() => { this.props.unfollow(el.id) }} className={s.buttonUNFollow}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(el.id) }} className={s.buttonFollow}>follow</button>}
                        <span>{el.name} {el.surname} {el.follow ? 'ПОДПИСАН' : '0'} </span>
                        <span>{"el.locations.country"} {"el.locations.city"}</span>
                    </div>))
                }
            </div>
        )

    }
}

export default Users;