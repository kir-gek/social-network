import s from './Users.module.css'
const Users = (props) => {
    if (props.state.users.length === 0){
        props.setUsers([
            
    {
        id: 1, photo: 'https://w7.pngwing.com/pngs/420/700/png-transparent-spider-man-spider-man-spider-man.png',
        follow: false, name: 'Dmitry', surname: 'K', status: "I'm big boss", locations: { country: 'Belarus', city: 'Minsk' }
    },
    {
        id: 2, photo: 'https://w7.pngwing.com/pngs/420/700/png-transparent-spider-man-spider-man-spider-man.png',
        follow: true, name: 'Anton', surname: 'K', status: "I'm big boss too", locations: { country: 'Russia', city: 'Moscow' }
    },
    {
        id: 3, photo: 'https://w7.pngwing.com/pngs/420/700/png-transparent-spider-man-spider-man-spider-man.png',
        follow: false, name: 'Mary', surname: 'K', status: "I'm big bossssssssssss", locations: { country: 'Ukraine', city: 'Kiev' }
    }
        ])
    }

    let users = props.state.users.map(el => (
        <div className={s.wrapper}>
            <img src={el.photo}/>
            {el.follow ? <button onClick={() => { props.unfollow(el.id) }} className={s.buttonUNFollow}>Unfollow</button>
                : <button onClick={() => { props.follow(el.id) }} className={s.buttonFollow}>follow</button>}
            <span>{el.name} {el.surname} {el.follow ? 'ПОДПИСАН' : '0'} </span>
            <span>{el.locations.country} {el.locations.city}</span>
        </div>))

    return (<div className={s.wrapperALL}>
        {users}
    </div>)
}

export default Users;

