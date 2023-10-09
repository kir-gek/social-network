import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const SelectedDialog = ({isActive}) => isActive ? s.active : s.dialog;

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={SelectedDialog}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;