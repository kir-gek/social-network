const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'

let initialState = {
    users: [
    ],
    countOnPages: 15,
    totalCount: 0,
    currentPage: 5,
    isFetching: false
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, follow: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: (action.currentPage)
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: (action.totalNumber)
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: (action.isFetching)
            }

        default:
            return state;
    }
}

export const followAС = (userID) => ({ type: FOLLOW, userID })
export const unfollowAС = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalNumber) => ({ type: SET_TOTAL_USERS_COUNT, totalNumber })
export const toggleFetchingAC = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export default usersReducer;
