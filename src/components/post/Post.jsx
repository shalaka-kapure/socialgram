import { AiOutlineHeart, AiOutlineSend, AiOutlineSave } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import "./post.css";
import { useState } from "react";
import { Posts } from "../../dummyData";

const Post = ({post}) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
    setLiked(!isLiked);    
  }

  return (
    <div className="posts">
      <div className="post">
        <div className="titlebar">
          <div className="dp">
            <img src={post.profilePicture} alt="" />
          </div>
          <div className="username">{post.userName}</div>
          <div className="vert">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="photo">
          <img src={post.post} alt="" />
        </div>
        <div className="btn">
          <div>
            <AiOutlineHeart className={liked ? "icon-liked" : "icon"} onClick={likeHandler}/>          
            <FaRegComment className="icon"/>          
            <AiOutlineSend className="icon"/>
          </div>
          <div><AiOutlineSave className="icon"/></div>
        </div>
        <div className="likeCounter">{like} likes</div>
        <div className="caption">
          <div className="captionName">{post.userName}</div>
          <div className="captionText">{post.caption}</div>
        </div>
        <div className="comments">{post.comment} comments</div>
        <div className="date">{post.date}</div>
      </div>
    </div>
  );
};

export default Post;
