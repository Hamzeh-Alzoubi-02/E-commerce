import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DashbordUp from "../Dashbord/DashbordUp.js";
 

export default function SignUp() {
   
    /* Focus */
    const focus=useRef(null);
    useEffect(() => {
      focus.current.focus();
    },[])
  

    

    /* useState */ 
    const [error,setError] = useState(false)
    const [data,setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  
  function OnChange(e){
     setData({...data , [e.target.name]:e.target.value})
    }
    /* handelSubmit */

  async  function handelSubmit(e){
         e.preventDefault();
         setError(true);

         try{
          let lo= await axios.post("http://localhost:9000/USER",data)
            if(lo.status===201){
                window.location.pathname="/Home"

            }
          

         }
         catch(error){
            console.log(error)
         }
       
    }
    return (
        <div className="RegiLog">
         <DashbordUp />
            <div className="container">
                <h1>Sign Up</h1>
                <form onSubmit={handelSubmit} className="FORM">
                    <label htmlFor="name"><p className="name"> Name : </p></label>
                    <input type="text" name="name" id="name" value={data.name} onChange={OnChange} ref={focus}/>
                    {data.name.length < 3 && error&&<p className="error">Name must be at least 3 characters</p>}
                    <label htmlFor="email"><p className="email"> Email : </p></label>
                    <input type="text" name="email" id="email" value={data.email} onChange={OnChange}/>
                    {data.email.length < 3 && error&&<p className="error">Email must be at least 3 characters</p>}
                    <label htmlFor="password"><p className="password"> Password : </p></label>
                    <input type="password" name="password" id="password" value={data.password} onChange={OnChange} />
                    <label htmlFor="confirmPassword"><p className="confirmPassword"> Confirm Password : </p></label>
                    <input type="password" name="confirmPassword" id="confirmPassword"  value={data.confirmPassword} onChange={OnChange}/>
                    {data.password !== data.confirmPassword&&error && <p className="error">password not match</p>}
                    <br />
                    <button type="submit">Sign Up</button>
                    
                </form>
            </div>
        </div>
    );
}