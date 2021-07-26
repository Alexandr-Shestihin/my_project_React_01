import React from 'react';
import s from "./ProfileInfo.module.scss";

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status,
   }
   activateEditMode = () => {
      this.setState({
         editMode: true,
      })
   }
   deactivateEditMode = () => {
      this.setState({
         editMode: false,
      });
      this.props.thunkUpdateStatus(this.state.status)
   }
   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value,
      })
   }

   render() {
      return (
         <div>
            {
               this.state.editMode ?
                  <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status} input /> :
                  <span onDoubleClick={this.activateEditMode} >{this.props.status || 'Нет статуса'}</span>
            }
         </div>
      )
   }

}
export default ProfileStatus;