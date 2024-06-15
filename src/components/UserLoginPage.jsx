import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react';
import axios from "axios";

function UserLoginPage() {

    const navigate = useNavigate();

    const REST_API_BASE_URL = "http://localhost:8080/api/feedsapp";

    const [user, setUser] = useState({
      userName: "",
      passWord: "",
    })

    const [response, setResponse] = useState("");

    function handleChange(e){  
       setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       await axios.post(REST_API_BASE_URL+"/login",{
            "userName": user.userName,
            "passWord": user.passWord,
        })
         .then((resp) =>{setResponse(resp);
            handleLogin(response);
            console.log(resp.data);
         })
         .catch((error) => console.log(error))
    }

    function handleLogin(response){
        response.localeCompare('Valid user')? navigate('/user') : navigate('/')
       // response.localeCompare('Valid user')? navigate('/user') : navigate('/abc')
    }

  return (
    <div>
        <h1>User Login</h1>
        <div className="space_buttons"></div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User Name" name = "userName" value={user.userName} onChange={handleChange}/>
        <br></br>
        <div className="space_buttons"></div>
        <input type="password" placeholder="Password" name = "passWord" value={user.passWord} onChange={handleChange}/>
        <br></br>
        <div className="space_buttons"></div>
        <Button className='btn btn-primary mb-2' type="submit" >Login</Button><span>{" "}</span>
        <Button className='btn btn-primary mb-2' onClick={()=>navigate('/user-registeration')}>Register</Button>
        </form>
    </div>
  )
}

export default UserLoginPage