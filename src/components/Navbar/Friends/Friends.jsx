import s from "./Friends.module.css"

const Friends = (props) => {
let friends = props.friendItem.map (el => (<div> {el.name} <div> <img src={el.imgURL} /> </div> </div>))
    return (
        <div className={s.friends}>
            { friends }
        </div>
    )
}

export default Friends;
