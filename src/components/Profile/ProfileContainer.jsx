import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, thunkProfile, thunkUserStatus, thunkUpdateStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) { userId = 17539 };
      this.props.thunkProfile(userId);
      this.props.thunkUserStatus(userId);
   }
   render() {

      return (
         < Profile {...this.props} profile={this.props.profile} status={this.props.status} thunkUpdateStatus={this.props.thunkUpdateStatus} />
      )

   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
   }
}

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, { setUserProfile, thunkProfile, thunkUserStatus, thunkUpdateStatus }))(ProfileContainer)
