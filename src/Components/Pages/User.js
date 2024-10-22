import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Up from "../Dashbord/Up";
 
export default function User() {
    const [search, setSearch] = useState("");
    function Delete(id){
       
        
        axios.delete(`http://localhost:9000/USER/${id}`)
        setRun(run+1)
        }
    const [run ,setRun]=useState(0);
    const [user,setUser]=useState([])
 
       useEffect(()=>{
        fetch(" http://localhost:9000/USER")
        .then(res=>res.json())
        .then(res=>setUser(res))
    
       },[run])

   const show =user.filter((user)=>user.email.includes(search.toLocaleLowerCase())).map((user,index)=>
     <tr key={index}>
       <td>{user.id}</td>
       <td style={{width: "300px"}}>{user.name}</td>
       <td >{user.email}</td>
       <td onClick={()=>Delete(user.id)} style={{cursor:"pointer",color:"red"}}> Delete </td>
       <td > <Link to={`/Edit/${user.id}`}>Edit</Link>  </td>
        
     </tr>   
   )
    return (
        <>
        <Up/>
        <div className="User">
            
            <input type="search" placeholder="search" className="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
     <table border="1" className="TABEL">
     <thead>
        <tr>
            <th> Id  </th>
            <th> Name   </th>
            <th> Email  </th>
            <th colSpan={2}> Options  </th>
        </tr>
    </thead>
    <tbody>
        
            {show}
        
        
        </tbody>
    </table>
        </div>
        </>
    );
}