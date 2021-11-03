import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='23'/>
                <Post message='I am fine. Do you believe in our Father - Satan?' likesCount='666'/>
            </div>
    </div>
}

export default MyPosts;