import axios from "axios";
import {   useState } from "react";
import Up from "../Dashbord/Up";
 

export default function AddProdect() {
 
 const [file, setFile] = useState({
    img: "",
    name: "",
    price: "",
    description: "",
 });
 const [show, setShow] = useState(null);
 
 
 function onChange(e) {
   setFile({ ...file, [e.target.name]: e.target.value });
   if(e.target.name==="img"){
    setShow({ ...file, [e.target.name]: e.target.files[0] });
   }
  }
   
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
     
    formData.append("img", file.img);  
         axios.post("http://localhost:8000/images", file)
        .then((response) => { 
            
          console.log(response);
          
        })
        .catch((error) => {
          console.log(error);
        })
 
  }
 
    return (
      <>
      <Up />
        <div className="add">
            <h1>Add Prodect</h1>
            <form className="add-form" onSubmit={handleSubmit}> 
            <input type="text" placeholder="Prodect Name" name="name" value={file.name} onChange={onChange}/>
            <input type="text" placeholder="Prodect Price" name="price" value={file.price} onChange={onChange}/>
            <input type="text" placeholder="Prodect Description" name="description" value={file.description} onChange={onChange}/>
         
           
            <input type="file" placeholder="Prodect Image"  className="image" name="img"    onChange={onChange}/>
           {
            show &&
            <img src={URL.createObjectURL(show.img)} alt="Add Prodect" style={{width: "100px", height: "100px"}} />
}
              
          
            <button type="submit">Upload</button>
            </form>
        </div>
        </>
    );
}