import React from "react";

import "./topbar.css"

import { BsFillPersonFill, BsFillBellFill, BsFillChatSquareTextFill } from "react-icons/bs";

import { CiSearch } from "react-icons/ci";

class Topbar extends React.Component{

render(){

return(

<div className="topbarContainer">

<div className="topbarLeft">

<span className="logo">MaItRi</span>

</div>

<div className="topbarCenter">

<div className="searchbar">

<CiSearch className="searchIcon"/>

<input className="searchInput" placeholder="Serch for Friend, post or video" />

</div>

</div>

<div className="topbarRight">

<div className="topbarLinks">

<span className="topbarlink">Homepage</span>

<span className="topbarlink">Timeline</span>

</div>

<div className="topbarIcons">

<div className="topbarIconItem">

< BsFillPersonFill/>

<span className="tobarIconBadge">6</span>

</div>

<div className="topbarIconItem">

< BsFillChatSquareTextFill/>

<span className="tobarIconBadge">28</span>

</div>

<div className="topbarIconItem">

< BsFillBellFill/>

<span className="tobarIconBadge">56</span>

</div>

</div>

<img src="kohli1.jpg" alt="Kohli" className="topbarImg"/>

</div>

</div>

)

}

}
export default Topbar;