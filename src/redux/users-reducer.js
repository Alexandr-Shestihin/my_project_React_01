const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'; // ус-т пользователей
const PAGE_SIZE = 'PAGE_SIZE'; // ус-т кол-во пользователей на странице
const SET_PAGE = 'SET_PAGE'; // ус-т активную страницу 

const SET_PAGE_COUNT = 'SET_PAGE_COUNT'; // определяет кол-во страниц

let initialeState = {
   users: [],
   pageSize: 5, //кол-во пользователей на странице
   totalUsersCount: 20, //всего пользователей
   currentPage: 1, //стартовая страница
   pagesCount: 5, //кол-во страниц
}

const usersReducer = (state = initialeState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         };

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         };

      case SET_USERS: {
         return {
            ...state,
            users: action.users
         }
      };

      case PAGE_SIZE: {
         return {
            ...state,
            pageSize: action.pageSize,
            currentPage: 1,
         }
      };

      case SET_PAGE: {
         return {
            ...state,
            currentPage: action.pageNumber,
         }
      };

      case SET_PAGE_COUNT: {
         debugger
         return {
            ...state,
            pagesCount: Math.ceil(action.totalUsersCount / action.pageSize)
         }
      }

      default: return state;
   }

}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setPageSizeAC = (pageSize) => ({ type: PAGE_SIZE, pageSize });
export const setPageAC = (pageNumber) => ({ type: SET_PAGE, pageNumber });
export const setPageCountAC = (totalUsersCount, pageSize) => ({ type: SET_PAGE_COUNT, totalUsersCount, pageSize })

export default usersReducer;