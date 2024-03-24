import s from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import React from 'react'


class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        return (
            <div className={s.wrapperALL}>
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