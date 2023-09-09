import "./share.css";
import FortMinor from "../../assets/FortMinorX.jpeg";
import { MdPermMedia, MdLabel } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BsEmojiSmileFill } from "react-icons/bs";


export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={FortMinor} alt="#"/>
                    <input 
                        placeholder="What's in your mind Safak?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia className="shareIcon shareIcon1"/>
                            <span className="shareOptionText www">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <MdLabel className="shareIcon shareIcon2"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <HiLocationMarker className="shareIcon shareIcon3"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <BsEmojiSmileFill className="shareIcon shareIcon4"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}