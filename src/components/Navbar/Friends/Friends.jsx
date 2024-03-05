import s from "./Friends.module.css"

const Friends = (props) => {
    let friends = props.friendItems.map(el => (<div> {el.name} key = {el.id} <div> <img src={el.imgURL} /> </div> </div>))
    return (
        <div className={s.friends}>
            {friends}
        </div>
    )
}

export default Friends;
