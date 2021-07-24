import React from 'react';
import s from "./ProfileInfo.module.scss";

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
   }
   activateEditMode() {
      console.log(this);
      this.setState({
         editMode: true,
      })
   }
   deactivateEditMode() {
      this.setState({
         editMode: false,
      })
   }

   render() {
      return (
         <div>
            {
               this.state.editMode ?
                  <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} input /> :
                  <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
            }
         </div>
      )
   }

}
export default ProfileStatus;