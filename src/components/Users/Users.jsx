const Users = (props) => {
    let users = props.state.users.map(el => (<div>
                <button>Follow</button>
        {el.name} {el.surname}  {el.locations.country}</div>))
    return (<div>
        {users}
    </div>)
}

export default Users;

