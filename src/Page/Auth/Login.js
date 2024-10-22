import { useEffect, useRef, useState } from "react";
import DashbordUp from "../Dashbord/DashbordUp.js";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
export default function Login() {
 
    /* Focus */
    const focus=useRef(null);
    useEffect(() => {
      focus.current.focus();
    },[])
  





    
 

    /* useState */ 
  
    const [error,setError] = useState(false)
    const [data,setData] = useState({
    
    email: "",
    password: "",
    
  })
  
  function OnChange(e){
     setData({...data , [e.target.name]:e.target.value})
    }
    /* handelSubmit */

  async  function handelSubmit(e){
         e.preventDefault();
         setError(true);
                   
         try{
             await axios.get("http://localhost:9000/USER",data)
            .then(res=>{
                res.data.map(item=>{
                    if(item.email===data.email){
                        if(item.password===data.password){
                           toast.success("Login successfully",{
                               position:"top-center",
                               theme:"colored"
                           });
                            window.location.pathname="/Home"
                            
                            
                        }else{
                           
                            toast.error("Password or/and Email not correct",{
                                position:"top-center",
                           
                            });
                            
                           
                        }
                       
                    }
                   
                 
                  
                }) 
            }) 
            

         }catch(error){
            console.log(error)
         }

       
    }
 
    return (
        <div className="RegiLog">
         <DashbordUp />
            <div className="container">
                <h1>Log in</h1>
                <form onSubmit={handelSubmit} className="FORM">
                 
                 
                    <label htmlFor="email"><p className="email"> Email : </p></label>
                    <input type="text" name="email" id="email" value={data.email} onChange={OnChange} ref={focus}/>
                    {data.email.length < 3 && error&&<p>Email must be at least 3 characters</p>}
                    <label htmlFor="password"><p className="password"> Password : </p></label>
                    <input type="password" name="password" id="password" value={data.password} onChange={OnChange} />
                    {data.password.length < 1 && error&&<p>Password must be at least 3 characters</p>}
                    <br />
                    <button   type="submit" >Log in</button>
                    <ToastContainer />
                
                   
                </form>
                 
            </div>
        
        </div>
    );
}













































 
