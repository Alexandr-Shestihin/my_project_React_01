import axios from 'axios';
import React from 'react';
import UserPhoto from './../../files/img/userPhoto.jpg';
import s from './Users.module.scss';

const Users = (props) => {
   let getUsers = () => {
      if (props.users.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
               props.setUsers(response.data.items)
            });
      };
   }
   return (
      <div>
         <button onClick={getUsers} >Загрузить Пользорвателей</button>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img src={u.photos.small ? u.photos.small : UserPhoto} className={s.usersPhoto} />
                  </div>
                  <div>
                     {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}
                           className={`${s.buttonUnfallow} ${s.button}`}
                        >Unfallow</button>
                        : <button onClick={() => { props.follow(u.id) }}
                           className={`${s.buttonFallow} ${s.button}`}
                        >Fallow</button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                  </span>
                  <span>
                     <div>{/* u.location.country */}</div>
                     <div>{/* u.location.city */}</div>
                  </span>
               </span>
               <br /><br />
            </div>)
         }
      </div >
   )
}
export default Users;