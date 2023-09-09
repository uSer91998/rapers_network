import "./topbar.css";
import { BsSearch, BsFillPersonFill, BsFillChatDotsFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import people1 from "../../assets/2pac.jpeg";


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">rap online</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <BsSearch className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <BsFillPersonFill/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsFillChatDotsFill/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <IoIosNotifications/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src={people1} alt="2Pac" className="topbarImg" />
            </div>
        </div>
    )
}