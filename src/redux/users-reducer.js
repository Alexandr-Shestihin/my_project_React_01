const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'; // ус-т пользователей
const PAGE_SIZE = 'PAGE_SIZE'; // ус-т кол-во пользователей на странице
const SET_PAGE = 'SET_PAGE'; // ус-т активную страницу 
const SET_PAGE_COUNT = 'SET_PAGE_COUNT'; // ус-т кол-во страниц
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'; //ус-т общее кол-во пользователей
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; //переключ анимацию загрузки  
const TOGGLE_IS_FOLLOWED_PROGRESS = 'TOGGLE_IS_FOLLOWED_PROGRESS'; //enabled/disabled btn

let initialeState = {
   users: [],
   pageSize: 100, //кол-во пользователей на странице
   totalUsersCount: 0, //всего пользователей
   currentPage: 1, //стартовая страница
   pagesCount: 5, //кол-во страниц
   isFetching: false, // анимация загрузки
   followedInProgress: [2, 3,],
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
         return {
            ...state,
            pagesCount: Math.ceil(action.totalUsersCount / action.pageSize)
         }
      };

      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.totalUsersCount,
         }
      }

      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }

      case TOGGLE_IS_FOLLOWED_PROGRESS: {
         return {
            ...state,
            followedInProgress: action.status
               ? [...state.followedInProgress, action.id]
               : state.followedInProgress.filter(u => u != action.id),
         }
      }

      default: return state;
   }

}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPageSize = (pageSize = 0) => ({ type: PAGE_SIZE, pageSize });
export const setPage = (pageNumber) => ({ type: SET_PAGE, pageNumber });
export const setPageCount = (totalUsersCount, pageSize) => ({ type: SET_PAGE_COUNT, totalUsersCount, pageSize });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setFollowedInProgress = (status, id) => ({ type: TOGGLE_IS_FOLLOWED_PROGRESS, status, id })


export default usersReducer;