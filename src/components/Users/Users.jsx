import React from 'react';
import s from './Users.module.scss';

const Users = (props) => {
   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, photoURL: 'https://sun9-22.userapi.com/impf/c857428/v857428728/c1d38/YAhH1xwuFYI.jpg?size=1280x960&quality=96&sign=9dd73da1d10e6c080b827595a160c7be&type=album', followed: true, fullName: 'Александр', status: `I'am a great`, location: { city: 'Moscow', country: 'Poland' }, age: 25 },
         { id: 2, photoURL: 'https://sun9-6.userapi.com/impf/c851324/v851324358/175a63/SHzMVFdl13Y.jpg?size=1280x621&quality=96&sign=80ca3093c3e408533c30ab0d13c4802a&type=album', followed: true, fullName: 'Ян', status: `I'am a story-teller`, location: { city: 'Moscow', country: 'Russia' }, age: 33 },
         { id: 3, photoURL: 'https://sun9-48.userapi.com/c631/u94261756/115407395/x_b1049b1e.jpg', followed: false, fullName: 'Black Reigin', status: `I'am a sex-boss`, location: { city: 'Nigeria', country: 'Russia' }, age: 33 },
      ])
   }
   return (
      <div>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img src={u.photoURL} className={s.usersPhoto} />
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
                     <div>{u.fullName}</div>
                     <div>{u.status}</div>
                  </span>
                  <span>
                     <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                  </span>
               </span>
            </div>)
         }
      </div >
   )
}
export default Users;