import React from "react";

import { useState } from "react";
import './form.css'

function Form(){
    const[firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[mobilenumber,setMobile]=useState("")
    const[email,setemail]=useState("")
    const[password,setPassword]=useState("")
    const[conformpassword,setConformpassword]=useState("")
    const[dob,setDob]=useState("")
    const[gender,setSelectOption]=useState("")
    const[selectstate,setSelectState]=useState("")
    const[selectcourse,setSelectCourse]=useState("")
    const[classmode,setSelectClassMode]=useState("")
    const[comments,setComments]=useState("")
    const[passwordError,setPasswordError]=useState(false)
     
    const handleOptionChange=(event)=>{
        setSelectOption(event.target.value)
     }
     const handleOption=(event)=>{
        setSelectClassMode(event.target.value)
     }
     const handleSubmit=(e)=>{

        if(password!==conformpassword){
            setPasswordError(true)
        }
        else{
            setPasswordError(false)
            console.log("Firstname:",firstname)
            console.log("Lastname:",lastname)
            console.log("Mobile:",mobilenumber)
            console.log("Email:",email)
            console.log("Password:",password)
            console.log("ConformPassword:",conformpassword)
            console.log("Dob:", dob)
            console.log("Gender:",gender)
            console.log("SelectState:",selectstate)
            console.log("SelectCourse:",selectcourse)
            console.log("classMode:",classmode)
            console.log("Comments:", comments)
            alert("Your response saved scuccessfully: " +firstname)
        }
     }
    return(
        <div>
            <form className="reg-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personal Information</legend>
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname: </label>
                        <input type="text" id="firstname" placeholder="Enter your Firstname"  value={firstname}
                        onChange={(e)=> setFirstname(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname: </label>
                        <input type="text" id="lastname" placeholder="Enter your Lastname" value={lastname} 
                        onChange={(e)=> setLastname(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobilenumber">Mobile: </label>
                        <input type="text" id="mobilenumber" placeholder="Enter your mobile number"  maxLength={"10"} value={mobilenumber}
                        onChange={(e)=> setMobile(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail: </label>
                        <input type="text" id="email" placeholder="Enter your E-mail" value={email} 
                        onChange={(e)=> setemail(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" placeholder="Enter Password" maxLength={"10"} value={password} 
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confpassword">Confirm Password: </label>
                        <input type="password" id="confpassword" placeholder="Confirm Password" maxLength={"10"} value={conformpassword} 
                        onChange={(e)=> setConformpassword(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">DOB: </label>
                        <input type="date" id="dob" value={dob}
                        onChange={(e)=> setDob(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender: </label>
                        <input type="radio" className="gender" value="Male" checked={gender === "Male"} onChange={handleOptionChange}/>
                        <label>Male</label>
                        <input type="radio" className="gender" value="Female" checked={gender === "Female"} onChange={handleOptionChange}/>
                        <label>Female</label>
                        <input type="radio" className="gender" value="Others" checked={gender === "Others"} onChange={handleOptionChange}/>
                        <label>Others</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Select State">Select State: </label>
                        <select id="Select-State" value={selectstate} onChange={(e)=> setSelectState(e.target.value)} required>
                            <option>Select State</option>
                            <option value="AN">Andaman and Nicobar Islands</option>
                            <option value="AP">Andhra Pradesh</option>
                            <option value="AR">Arunachal Pradesh</option>
                            <option value="AS">Assam</option>
                            <option value="BR">Bihar</option>
                            <option value="CH">Chandigarh</option>
                            <option value="CT">Chhattisgarh</option>
                            <option value="DN">Dadra and Nagar Haveli</option>
                            <option value="DD">Daman and Diu</option>
                            <option value="DL">Delhi</option>
                            <option value="GA">Goa</option>
                            <option value="GJ">Gujarat</option>
                            <option value="HR">Haryana</option>
                            <option value="HP">Himachal Pradesh</option>
                            <option value="JK">Jammu and Kashmir</option>
                            <option value="JH">Jharkhand</option>
                            <option value="KA">Karnataka</option>
                            <option value="KL">Kerala</option>
                            <option value="LA">Ladakh</option>
                            <option value="LD">Lakshadweep</option>
                            <option value="MP">Madhya Pradesh</option>
                            <option value="MH">Maharashtra</option>
                            <option value="MN">Manipur</option>
                            <option value="ML">Meghalaya</option>
                            <option value="MZ">Mizoram</option>
                            <option value="NL">Nagaland</option>
                            <option value="OR">Odisha</option>
                            <option value="PY">Puducherry</option>
                            <option value="PB">Punjab</option>
                            <option value="RJ">Rajasthan</option>
                            <option value="SK">Sikkim</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="TG">Telangana</option>
                            <option value="TR">Tripura</option>
                            <option value="UP">Uttar Pradesh</option>
                            <option value="UT">Uttarakhand</option>
                            <option value="WB">West Bengal</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className="cs">
                    <legend>Course Selection</legend>
                    <div className="form-group">
                        <label htmlFor="select-course">Select Course</label>
                        <select id="select-course" value={selectcourse} onChange={(e)=> setSelectCourse(e.target.value)} required>
                            <option>Select</option>
                            <option>Java Full Stack</option>
                            <option>Python Full Stack</option>
                            <option>Software Testing</option>
                            <option>SalesForce</option>
                            <option>ChatGPT</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="class-mode">Class Mode: </label>
                        <input type="radio" className="mode" value="Online" checked={classmode==="Online"} onChange={handleOption}/>
                        <label>Online</label>
                        <input type="radio" className="mode" value="Offline" checked={classmode==="Offline"} onChange={handleOption}/>
                        <label>Offline</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comment: </label>
                        <textarea id="comment" value={comments} onChange={(e)=> setComments(e.target.value)} required></textarea><br></br>
                        
                    </div>
                    
                </fieldset>
                {passwordError && <p className="warning">"Password does not match"</p>}
                <button className="bt"type="submit">Register</button><br></br>
                
            </form>
        </div>
    )
}
export default Form;