import "./share.css"

import { MdOutlinePermMedia } from "react-icons/md";
import { BsTagFill, BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Share(){
    

return(

<div className="share">

<div className="shareWrapper">

<div className="shareTop">

<img src="kohli1.jpg" alt="kohli" className="shareProfileImg" />

<input placeholder="What's in your mind Raj" className="shareInput"/>

</div>

<hr className="shareHr"/>

<div className="shareButton">

<div className="shareOptions">

<div className="shareOption">

<MdOutlinePermMedia style={{color:"red"}} className="shareIcon"/>

<span className="shareOptionText">Photo/Video</span>

</div>
<div className="shareOption">

<BsTagFill style={{color:"green"}} className= "shareIcon"/>

<span className="shareOptionText">Tag</span>

</div>
<div className="shareOption">

<CiLocationOn style={{color:"blue"}} className="shareIcon"/>

<span className="shareOptionText">Location</span>

</div>
<div className="shareOption">

<BsEmojiSmile style={{color:"yellow"}} className="shareIcon"/>

<span className="shareOptionText">Emotes</span>

</div>

</div>
<button>Share</button>

</div>

</div>

</div>

)

}

export default Share;