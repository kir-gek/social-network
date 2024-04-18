const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_FETCHING = "TOGGLE-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  countOnPages: 15,
  totalCount: 0,
  currentPage: 5,
  isFetching: false,
  followInProgress: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalCount: action.totalNumber,
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followInProgress: action.isFetch
          ? [...state.followInProgress, action.id]
          : state.followInProgress.filter((el) => el != action.id),
      };

    default:
      return state;
  }
};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalNumber) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalNumber,
});
export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetch, id) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetch,
  id,
});
export default usersReducer;
