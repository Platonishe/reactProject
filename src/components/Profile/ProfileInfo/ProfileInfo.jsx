import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYsVdzfNcTFfiyfPbK_s_TkxjI1xg-ysYFw&usqp=CAU' />
        <div className={s.descBlock}>
            ava + desc
        </div>
    </div>

}

export default ProfileInfo;