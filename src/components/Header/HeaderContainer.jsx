import axios from "axios";
import Header from "./Header";
import React from "react";
import { setAuthUserData } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { AuthApi } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    AuthApi.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(
          data.data.email,
          data.data.id,
          data.data.login
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
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
