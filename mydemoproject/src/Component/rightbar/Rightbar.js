
import "./rightbar.css"

 function Rightbar(){

return(

<div className="rightbar">

<div className="rightbarWrapper">

<div className="birthdayContainer">

<img className="birthdayImg" src="parties.jpg" alt="bithday" />

<span className="birthdayText"><b>MS Dhoni</b> and <b>2 other Friends</b> have a birthday today</span>

</div>

<img className="rightbarAd" src="add.jpg" alt=""/>

<h4 className="rightbarTitle">Online Friends</h4>

<ul className="friendList">

<li className="rightbarFriend">

<div className="rightbarProfileImgContainer">

<img src="sachin.jpg" alt="sachin.jpg" className="rightbarprofileImg"/>

<span className="rightbarOnline"></span>

</div>

<span className="rightbarUsername">Sachin Thendulkar</span>

</li>

<li className="rightbarFriend">

<div className="rightbarProfileImgContainer">

<img src="dhoni.jpg" alt="dhoni" className="rightbarprofileImg"/>

<span className="rightbarOnline"></span>

</div>

<span className="rightbarUsername">MS Dhoni</span>

</li>

<li className="rightbarFriend">

<div className="rightbarProfileImgContainer">

<img src="rohit.jpg" alt="rohit" className="rightbarprofileImg"/>

<span className="rightbarOnline"></span>

</div>

<span className="rightbarUsername">Rohith Sharma</span>

</li>

<li className="rightbarFriend">

<div className="rightbarProfileImgContainer">

<img src="hardhik.jpg" alt="hardhik" className="rightbarprofileImg"/>

<span className="rightbarOnline"></span>

</div>

<span className="rightbarUsername">Hardhik Pandya</span>

</li>

<li className="rightbarFriend">

<div className="rightbarProfileImgContainer">

<img src="dhawan.jpg" alt="sachin.jpg" className="rightbarprofileImg"/>

<span className="rightbarOnline"></span>

</div>

<span className="rightbarUsername">Shikhar dhawan</span>

</li>

</ul>
</div>

</div>

)
}
export default Rightbar;