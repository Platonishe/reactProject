import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYsVdzfNcTFfiyfPbK_s_TkxjI1xg-ysYFw&usqp=CAU' />
        <div>
            ava + desc
        </div>
        <div>
            My posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;