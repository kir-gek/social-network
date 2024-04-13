import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://i.pinimg.com/originals/c5/b7/52/c5b752cc0bf052877e4057d6cb4d7203.png" />

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login"> login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
