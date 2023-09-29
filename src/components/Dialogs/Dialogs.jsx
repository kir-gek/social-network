import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Pasha
                </div>
                <div className={s.dialog}>
                    Masha
                </div>
                <div className={s.dialog  + ' ' + s.active}>
                    Marina
                </div>
                <div className={s.dialog}>
                    Danila
                </div>
                <div className={s.dialog}>
                    Bob
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Hello? how are you?
                </div>
                <div className={s.message}>
                    Yo
                </div>
            </div>
        </div>
    );
}

export default Dialogs;