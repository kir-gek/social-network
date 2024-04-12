import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile } from "../../Redux/profile-reducer";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";


// // wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return <Component {...props} router={{ location, navigate, params }} />;
//   }
//   return ComponentWithRouterProp;
// }



export function withRouter(Children){
     return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
  }


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId =2
    debugger
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};


const WhitsUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setProfile })(WhitsUrlContainerComponent);
