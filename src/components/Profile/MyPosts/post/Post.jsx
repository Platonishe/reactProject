import React from "react";
import s from './post.module.css';

const Post = (props) => {

    return <div className={s.item}>
                <img src='https://pbs.twimg.com/media/CqxkjV7XgAEswAF.jpg:large' />
        { props.message }
        <div>
            <span>like</span> {props.likesCount}
        </div>
          </div>


}

export default Post;