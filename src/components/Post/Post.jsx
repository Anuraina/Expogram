import React from 'react'
import { useState } from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'
export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isliked,setisLiked] = useState(false)

    function handleLike(){
        setLike(isliked? like+1:like-1)
        setisLiked(!isliked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUserName">{Users.filter((u)=>u.id===post?.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" onClick={handleLike} className="likeIcon" />
                <img src="/assets/heart.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">Liked by {like}</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comments} Comments</span>
            </div>
        </div>
        </div>
    </div>
  )
}
