import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, thunkProfile } from './../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      this.props.thunkProfile(userId)
   }

   render() {
      if (!this.props.isAuth) return <Redirect to='/login' />
      return (
         < Profile {...this.props} profile={this.props.profile} />
      )
   }
}
let NewProfileContainer = withRouter(ProfileContainer);
let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth,
   }
}

export default connect(mapStateToProps, { setUserProfile, thunkProfile })(NewProfileContainer);