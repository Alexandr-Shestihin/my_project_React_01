import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setPageSize, setPage, setPageCount, setTotalUsersCount, setIsFetching, setFollowedInProgress } from '../../redux/users-reducer';
import { usersAPI } from './../api/api';

class UsersFunc extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
         this.props.setIsFetching(false);
         this.props.setUsers(response.items)
         this.props.setTotalUsersCount(response.totalCount)
      });
   }

   showCountUsersOnPage = (pageNumber) => {
      this.props.setIsFetching(true);
      this.props.setPageSize(pageNumber);
      usersAPI.getUsers(1, pageNumber).then(response => {
         this.props.setIsFetching(false);
         this.props.setUsers(response.items)
      });
   }
   showPage = (pageNumber) => {
      this.props.setIsFetching(true);
      this.props.setPage(pageNumber);
      usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
         this.props.setIsFetching(false);
         this.props.setUsers(response.items)
      })
   }
   render() {

      return (
         <Users
            setPageCount={this.props.setPageCount}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            showCountUsersOnPage={this.showCountUsersOnPage}
            currentPage={this.props.currentPage}
            showPage={this.showPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            pagesCount={this.props.pagesCount}
            isFetching={this.props.isFetching}
            setFollowedInProgress={this.props.setFollowedInProgress}
            followedInProgress={this.props.followedInProgress}
         />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      pagesCount: state.usersPage.pagesCount,
      isFetching: state.usersPage.isFetching,
      followedInProgress: state.usersPage.followedInProgress,
   }
}

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setPageSize,
   setPage,
   setPageCount,
   setTotalUsersCount,
   setIsFetching,
   setFollowedInProgress,
})(UsersFunc);
