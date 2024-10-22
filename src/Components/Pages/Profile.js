import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Up from "../Dashbord/Up";

export default function Profile() {
  
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/USER").then((res) => {
      setUser(res.data);
     
    })

    .then(()=>console.log(user))

  },[])
  
  //filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
   
  
   const show = user.map((user, index) => (
    
    <tr key={index}> 
 
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
 
      </tr>
    
))

  
  return (
    <>
    
    <Up />
  
    <div className="User">
 
<table border="1" className="TABEL">
<thead>
<tr>
    <th> Id  </th>
    <th> Name   </th>
    <th> Email  </th>
     
</tr>
</thead>
<tbody>

{show.includes("") ? <h1>Loading...</h1> : show}

</tbody>
</table>
</div>
</>
);
}