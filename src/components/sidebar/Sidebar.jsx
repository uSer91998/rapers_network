import "./sidebar.css";
import { SlFeed } from "react-icons/sl";
import { BsChatSquareTextFill } from "react-icons/bs";
import { LiaVideoSolid } from "react-icons/lia";
import { MdGroups2 } from "react-icons/md";
import { BsFillBookmarksFill } from "react-icons/bs";
import { BsQuestionSquare } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import Eminem from "../../assets/Eminem.jpeg";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <SlFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsChatSquareTextFill className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <LiaVideoSolid className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdGroups2 className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillBookmarksFill className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsQuestionSquare className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaSuitcase className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <AiTwotoneCalendar className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaGraduationCap className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul>
                <ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul>
                <ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul>
                <ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul>
                <ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul>
                <ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul>
                <ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul><ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul><ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul><ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul>
                <ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul><ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul><ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul><ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul><ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul><ul className="sidebarFreandList">
                    <li className="sidebarFriend"></li>
                    <img className="sidebarFriendImg" src={Eminem} alt="#"/>
                    <span className="sidebarFriendName">Eminem</span>
                </ul>
            </div>
        </div>
    )
}