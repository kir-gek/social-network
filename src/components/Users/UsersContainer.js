import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFetching,
  toggleFollowingProgress,
  unfollow,
} from "../../Redux/users-reducer";
import { connect } from "react-redux";
import React from "react";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader";
import { UsersApi } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);

    UsersApi.getUsers(this.props.currentPage, this.props.countOnPages).then(
      (data) => {
        this.props.toggleFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      }
    );
  }

  setCurrentPage = (pageNumber) => {
    this.props.toggleFetching(true);
    this.props.setCurrentPage(pageNumber);

    UsersApi.getUsers(pageNumber, this.props.countOnPages).then((data) => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
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
          followInProgress = {this.props.followInProgress}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          toggleFollowingProgress = {this.props.toggleFollowingProgress}
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
    followInProgress: state.usersPage.followInProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
  toggleFollowingProgress
})(UsersContainer);
