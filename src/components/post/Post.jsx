import "./post.css";
import FortMinor from "../../assets/FortMinorX.jpeg";
import { CgMoreVerticalO } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { Users } from "../../dummyData";




export default function Post({post}) {
    const user = Users.filter(u => u.id === 1)
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} 
                            alt="#" 
                            className="postProfileImg" 
                        />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className="postData">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <CgMoreVerticalO/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="#" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <AiOutlineHeart className="likeIcon"/>
                        <BiLike className="likeIcon"/>
                        <span className="postLikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}