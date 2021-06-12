import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setPageSizeAC, setPageAC, setPageCountAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      pagesCount: state.usersPage.pagesCount
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setPageSize: (usersCount) => {
         dispatch(setPageSizeAC(usersCount))
      },
      setPage: (pageNumber) => {
         dispatch(setPageAC(pageNumber))
      },
      setPageCount: (totalUsersCount, pageSize) => {
         dispatch(setPageCountAC(totalUsersCount, pageSize))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);










/* import React from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
 */