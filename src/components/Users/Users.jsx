import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";
import axios from "axios";
import { FollowApi } from "../../api/api";

export const Users = (props) => {
  let pages = [];

  let totalPages = Math.ceil(props.totalCount / props.countOnPages);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={s.wrapperALL}>
      {pages.map((p) => (
        <span
          onClick={(e) => {
            props.setCurrentPage(p);
          }}
          className={props.currentPage === p && s.selectedPage}
        >
          {" "}
          {p}{" "}
        </span>
      ))}

      {props.users.map((el) => (
        <div className={s.wrapper}>
          <NavLink to={"/profile/" + el.id}>
            <img src={el.photos.small === null ? userPhoto : el.photos.small} />
          </NavLink>
          {el.followed ? (
            <button
              onClick={() => {
                FollowApi.unfollow(el.id).then((data) => {
                  if (data.resultCode === 0) props.unfollow(el.id);
                });
              }}
              className={s.buttonUNFollow}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                FollowApi.follow(el.id).then((data) => {
                  if (data.resultCode === 0) props.follow(el.id);
                });
              }}
              className={s.buttonFollow}
            >
              follow
            </button>
          )}
          <span>
            {el.name} {el.surname} {el.follow ? "ПОДПИСАН" : "0"}{" "}
          </span>
          <span>
            {"el.locations.country"} {"el.locations.city"}
          </span>
        </div>
      ))}
    </div>
  );
};
