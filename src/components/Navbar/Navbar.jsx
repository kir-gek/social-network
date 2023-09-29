import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const SelectedLink = ({isActive}) => isActive ? s.activeLink : s.item;
// Она имеет класс activeLink если isActive, иначе класс item

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={SelectedLink}> Profile </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={SelectedLink}>Message</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={SelectedLink}>News</NavLink>
            </div>
            <div>
               <NavLink to="/music" className={SelectedLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={SelectedLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;