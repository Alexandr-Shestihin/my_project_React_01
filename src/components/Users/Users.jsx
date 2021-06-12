import axios from 'axios';
import React from 'react';
import UserPhoto from './../../files/img/userPhoto.jpg';
import s from './Users.module.scss';

class Users extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      });
   }

   showCountUsersOnPage = (pageNumber) => {
      this.props.setPageSize(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${pageNumber}`).then(response => {
         this.props.setUsers(response.data.items)
      });
   }
   showPage = (pageNumber) => {
      this.props.setPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      })
   }

   render() {
      this.props.setPageCount(this.props.totalUsersCount, this.props.pageSize)

      let arrayPage = [];
      for (let i = 1; i <= this.props.pagesCount; i++) {
         arrayPage.push(i);
      }
      return (
         <div>
            <div className={s.paginationButton}>
               <select onChange={(e) => this.showCountUsersOnPage(e.target.value)} name="lavel" title='Сколько пользователей выводить на одной странице.' >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option selected value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
               </select>
               {arrayPage.map(a => {
                  return <button className={this.props.currentPage === a && s.paginationButton_active} onClick={() => this.showPage(a)} >{a}</button>
               })}
            </div>
            {
               this.props.users.map(u => <div key={u.id}>
                  <span>
                     <div>
                        <img src={u.photos.small ? u.photos.small : UserPhoto} className={s.usersPhoto} />
                     </div>
                     <div>
                        {u.followed
                           ? <button onClick={() => { this.props.unfollow(u.id) }}
                              className={`${s.buttonUnfallow} ${s.button}`}
                           >Unfallow</button>
                           : <button onClick={() => { this.props.follow(u.id) }}
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
}

export default Users;