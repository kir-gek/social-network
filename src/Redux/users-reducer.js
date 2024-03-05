const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1, photo: 'https://w7.pngwing.com/pngs/420/700/png-transparent-spider-man-spider-man-spider-man.png',
            follow: false, name: 'Dmitry', surname: 'K', status: "I'm big boss", locations: { country: 'Belarus', city: 'Minsk' }
        },
        {
            id: 2, photo: 'https://w7.pngwing.com/pngs/420/700/png-transparent-spider-man-spider-man-spider-man.png',
            follow: true, name: 'Anton', surname: 'K', status: "I'm big boss too", locations: { country: 'Russia', city: 'Moscow' }
        },
        {
            id: 3, photo: 'https://w7.pngwing.com/pngs/420/700/png-transparent-spider-man-spider-man-spider-man.png',
            follow: false, name: 'Mary', surname: 'K', status: "I'm big bossssssssssss", locations: { country: 'Ukraine', city: 'Kiev' }
        }
    ]
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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAС = (userID) => ({ type: FOLLOW, userID })
export const unfollowAС = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;
