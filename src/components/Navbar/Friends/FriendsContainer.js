import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) =>{
    return{
        friendItems : state.navBar.friends
    }
}

const FriendsContainer = connect(mapStateToProps) (Friends);
export default FriendsContainer;