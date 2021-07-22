import React from 'react';
import Preload from './../common/preload/Preload';
import UserPhoto from './../../assets/image/userPhoto.jpg';
import { NavLink } from 'react-router-dom';
import s from './Users.module.scss';

const Users = (props) => {
   props.setPageCount(props.totalUsersCount, props.pageSize)
   //alert(props.isFetching);

   let arrayPage = [];
   for (let i = 1; i <= props.pagesCount; i++) {
      arrayPage.push(i);
   }
   console.log(props.followedInProgress.some(u => u === 5));
   return (
      <div>
         <div className={s.paginationButton}>
            <select onChange={(e) => props.showCountUsersOnPage(e.target.value)} name="lavel" title='Сколько пользователей выводить на одной странице.' >
               <option value="10">10</option>
               <option value="20">20</option>
               <option value="30">30</option>
               <option value="40">40</option>
               <option value="50">50</option>
               <option value="60">60</option>
               <option value="70">70</option>
               <option value="80">80</option>
               <option value="90">90</option>
               <option selected value="100">100</option>
            </select>
            {arrayPage.map(a => {
               return <button className={props.currentPage === a && s.paginationButton_active} onClick={() => props.showPage(a)} >{a}</button>
            })}
         </div>
         {props.isFetching ? <Preload /> : null}
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div> <NavLink to={'/profile/' + u.id} >
                     <img src={u.photos.small ? u.photos.small : UserPhoto} className={s.usersPhoto} />
                  </NavLink>
                  </div>
                  <div>
                     {u.followed
                        ? <button
                           disabled={props.followedInProgress.some(s => s === u.id)}
                           onClick={() => { props.onUnfollow(u.id) }} className={`${s.buttonUnfallow} ${s.button}`}
                        >Unfallow</button>
                        : <button disabled={props.followedInProgress.some(s => s === u.id)}
                           onClick={() => { props.onfollow(u.id) }}
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