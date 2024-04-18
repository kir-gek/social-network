import axios from "axios";
import { toggleFollowingProgress } from "../Redux/users-reducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const UsersApi = {
  getUsers(currentPage = 1, countOnPages = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${countOnPages}`)
      .then((response) => response.data);
  },
};

export const FollowApi = {
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};

export const ProfileApi = {
  getProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
};

export const AuthApi = {
  getAuthMe() {
    return instance.get("auth/me").then((response) => response.data);
  },
};
