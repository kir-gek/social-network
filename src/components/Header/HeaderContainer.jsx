import axios from "axios";
import Header from "./Header";
import React from "react";
import { setAuthUserData } from "../../Redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(
            response.data.data.id,
            response.data.data.email,
            response.data.data.login
          );
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
