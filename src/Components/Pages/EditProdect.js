import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Up from "../Dashbord/Up";
 
export default function EditProdect() {
    const [Prodect, setProdect] = useState([]);
   //() => axios.delete(`http://localhost:8000/images/${prodect.id}`
   
   function Delete(id) {

    axios.delete(`http://localhost:8000/images/${id}`)
  }

  
  function EDIT(){  
    alert("Are you sure you want to edit ?")

  }
    useEffect(() => {

        axios.get("http://localhost:8000/images")
            .then((response) => {
                setProdect(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    })
    const ShowEdit=Prodect.map((prodect)=>(
        
            <div className="Edit" key={prodect.id}>
                <img src={prodect.img} alt="img" style={{ width: "200px", height: "200px" }}/>
                <h1>{prodect.id}</h1>
                <h1>{prodect.name}</h1>
                <h1>{prodect.price}</h1>
                <h1>{prodect.description}</h1>
                <button onClick={()=>Delete(prodect.id)} style={{ cursor: "pointer" ,color:"red"}}>Delete</button>
                <Link to={`/EditProdect/${prodect.id}`} style={{ cursor: "pointer" ,color:"blue"}} className="EL">Edit-Prodect</Link>
              
            </div>
   
    ))
    
    return (
        <div className="father-edit">
            <Up/>
        <div  className="EditProdect">
            
            {ShowEdit}
             
        </div>
    </div>
    );
}