
import Post from "../post/Post";

import Share from "../share/Share";

import "./centerbar.css"

import { Posts } from "../Data";


function Centerbar(){

return(

<div className="centerbar">

<div className="centerbarWrapper">

<Share/>

{Posts.flatMap((p)=>(<Post key={p.id} post={p} />)

)}

</div>

</div>

)

}
export default Centerbar;