import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src="https://vignette.wikia.nocookie.net/horrormovies/images/0/02/0_9FQLdiztLy1rwpSI.jpg/revision/latest/top-crop/width/360/height/450?cb=20200116164951"></img>
          {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>

    )
}

export default Post;
