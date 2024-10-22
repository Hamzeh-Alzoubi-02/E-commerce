import { useEffect ,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Up from "../Dashbord/Up";

export default function EProdect() {
  const { id } = useParams();
  const [value, setValue] = useState({
    id: id,
    img: "",
    name: "",
    price: "",
    description: "",

  });
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/images/" + id)
      .then((response) => {
        setValue({ ...value, name: response.data.name, price: response.data.price, description: response.data.description, img: response.data.img });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/images/" + id, value)
      .then((response) => {
        console.log(response);
        navigate("/Edit");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  <div className="Update" >
   
      <div className="form-Update" >
 
        <form onSubmit={handleSubmit} className="item-Update" style={{minHeight: "700px"}}>
        <h1>Update</h1>
          <label htmlFor="name" style={{paddingRight: "250px"}}>Name :</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Edit Your Name" 
            value={value.name} 
            onChange={(e) => setValue({ ...value, name: e.target.value })} 
          />
          <label style={{paddingRight: "250px"}} htmlFor="price">Price :</label>
          <input 
            type="price" 
            id="price" 
            name="price" 
            placeholder="Edit Your Price" 
            value={value.price} 
            onChange={(e) => setValue({ ...value, price: e.target.value })} 
          />
          <label style={{paddingRight: "200px"}} htmlFor="description">Description :</label>
          <input 
            type="description" 
            id="description" 
            name="description" 
            placeholder="Edit Your Description" 
            value={value.description} 
            onChange={(e) => setValue({ ...value, description: e.target.value })} 
          />
          <label style={{paddingRight: "250px"}} htmlFor="img">Image :</label>
          <img src={value.img} alt="image" style={{width:"200px",height:"200px"}}/>
          <input 
            type="text" 
            id="img" 
            name="img" 
            placeholder="Edit Your Image" 
            value={value.img} 
            onChange={(e) => setValue({ ...value, img: e.target.value })} 
          />
         
          <button type="submit">Update</button>
        </form>
      </div>
  </div>
  );
}