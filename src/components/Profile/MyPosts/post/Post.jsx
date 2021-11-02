import React from "react";
import s from './post.module.css';

const Post = (props) => {
    let likeCounter = 0;
   let counter = () => {
      likeCounter++;
       return likeCounter;
   }

    return <div className={s.item}>
                <img src='https://pbs.twimg.com/media/CqxkjV7XgAEswAF.jpg:large' />
        { props.message }
        <div>
            <input value="like" onClick="counter()" type="button" />
            <div>{likeCounter}</div>
        </div>
          </div>


}

export default Post;