import s from './Navbar.module.css';

// console.log(s);
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div> <a href='/profile' className={s.item}>Profile</a> </div>
            <div> <a href='/dialogs' className={`${s.item} ${s.active}`}>Message</a> </div>
            <div> <a className={s.item}>News</a> </div>
            <div> <a className={s.item}>Music</a> </div>
            <div> <a className={s.item}>Settings</a> </div>
        </nav>
    )
}

export default Navbar;