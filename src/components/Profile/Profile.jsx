import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYsVdzfNcTFfiyfPbK_s_TkxjI1xg-ysYFw&usqp=CAU' />
        <div>
            ava + desc
        </div>
        <MyPosts/>
    </div>
}

export default Profile;