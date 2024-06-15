import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserRegister() {
    
    const REST_API_BASE_URL = "http://localhost:8080/api/feedsapp";

    const navigate = useNavigate();

    const [user, setUser] = useState({
      userName: "",
      passWord: "",
      emailId: "",
      phoneNumber: "",
      role: ""
    })

    function handleChange(e){  
       setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(REST_API_BASE_URL+"/post",{
            "userName": user.userName,
            "passWord": user.passWord,
            "emailId": user.emailId,
            "phoneNumber": user.phoneNumber,
            "role": user.role
        })
         .then((response) => console.log(response))
         .catch((error) => console.log(error))
    }

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
      <div className="space_buttons"></div>
          <input type="text" placeholder="User Name" name = "userName" value={user.userName} onChange={handleChange}/>
          <br></br>
          <div className="space_buttons"></div>
          <input type="password" placeholder="Password" name = "passWord" value={user.passWord} onChange={handleChange}/>
          <br></br>
          <div className="space_buttons"></div>
          <input type="email" placeholder="Email" name = "emailId" value={user.emailId} onChange={handleChange}/>
          <br></br>
          <div className="space_buttons"></div>
          <input type="text" placeholder="Phone no" name = "phoneNumber" value={user.phoneNumber} onChange={handleChange}/>
          <br></br>
          <div className="space_buttons"></div>
          <select name="role" onChange={handleChange}>
            <option selected disabled>Role</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Software Tester">Software Tester</option>
            <option value="Human Resource">Human Resource</option>
            <option value="DevOps Engineer">DevOp engineer</option>
          </select>
          <br></br>
          <div className="space_buttons"></div>
          <Button onClick={()=>navigate('/')}>Login</Button>
          <span> </span>
          <Button type="submit" onClick={()=>navigate('/user')}>Register</Button>
        
      </form>
    </div>
  );
}

export default UserRegister;
