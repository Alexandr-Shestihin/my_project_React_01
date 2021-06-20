import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setPageSize, setPage, setPageCount, setTotalUsersCount, setIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios';

class UsersFunc extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { withCredentials: true }).then(response => {
         this.props.setIsFetching(false);
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      });
   }

   showCountUsersOnPage = (pageNumber) => {
      this.props.setIsFetching(true);
      this.props.setPageSize(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${pageNumber}`, { withCredentials: true }).then(response => {
         this.props.setIsFetching(false);
         this.props.setUsers(response.data.items)
      });
   }
   showPage = (pageNumber) => {
      this.props.setIsFetching(true);
      this.props.setPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { withCredentials: true }).then(response => {
         this.props.setIsFetching(false);
         this.props.setUsers(response.data.items)
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
})(UsersFunc);
