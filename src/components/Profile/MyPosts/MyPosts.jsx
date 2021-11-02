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
                <Post message='Hi, how are you?' />
                <Post message='I am fine. Do you believe in our Father - Satan?' />
            </div>
    </div>
}

export default MyPosts;