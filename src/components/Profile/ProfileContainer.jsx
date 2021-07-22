import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, thunkProfile } from './../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      this.props.thunkProfile(userId)
   }
   render() {

      return (
         < Profile {...this.props} profile={this.props.profile} />
      )

   }
}
let whithRedirect = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
   }
}


let NewProfileContainer = withRouter(whithRedirect);


export default connect(mapStateToProps, { setUserProfile, thunkProfile })(NewProfileContainer);