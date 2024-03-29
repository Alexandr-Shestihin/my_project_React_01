import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, thunkAuth, thunkLogout } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.thunkAuth()
   }
   render() {
      return (
         <Header {...this.props} />
      )
   }
}
let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}
export default connect(mapStateToProps, { setAuthUserData, thunkAuth, thunkLogout })(HeaderContainer);