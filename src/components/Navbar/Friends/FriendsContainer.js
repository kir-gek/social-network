import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) =>{
    return{
        friendItems : state.navBar.friends
    }
}

const f2 = () =>{
    return{}
}
const FriendsContainer = connect(mapStateToProps, f2) (Friends);
export default FriendsContainer;