import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFetching,
  unfollow,
} from "../../Redux/users-reducer";
import { connect } from "react-redux";
import axios from "axios";
import React from "react";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countOnPages}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  setCurrentPage = (pageNumber) => {
    this.props.toggleFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countOnPages}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          setCurrentPage={this.setCurrentPage}
          totalCount={this.props.totalCount}
          countOnPages={this.props.countOnPages}
          currentPage={this.props.currentPage}
          users={this.props.state.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.usersPage,
    countOnPages: state.usersPage.countOnPages,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
})(UsersContainer);
