import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setPageSize, setPage, setPageCount, setTotalUsersCount, setIsFetching, setFollowedInProgress, thunkCreator, thunkFallow, thunkUnfallow } from '../../redux/users-reducer';

class UsersFunc extends React.Component {
   componentDidMount() {
      this.props.thunkCreator(this.props.currentPage, this.props.pageSize)
   }
   showCountUsersOnPage = (pageNumber) => {
      this.props.thunkCreator(1, pageNumber)
   }
   showPage = (pageNumber) => {
      this.props.thunkCreator(pageNumber, this.props.pageSize);
   }
   onfollow = (id) => {
      this.props.thunkFallow(id)
   }
   onUnfollow = (id) => {
      this.props.thunkUnfallow(id)
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
            users={this.props.users}
            pagesCount={this.props.pagesCount}
            followedInProgress={this.props.followedInProgress}
            onfollow={this.onfollow}
            onUnfollow={this.onUnfollow}
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
   setUsers,
   setPageSize,
   setPage,
   setPageCount,
   setTotalUsersCount,
   setIsFetching,
   setFollowedInProgress,
   thunkCreator,
   thunkFallow,
   thunkUnfallow,
})(UsersFunc);
