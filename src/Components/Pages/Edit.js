import { useEffect ,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const [value, setValue] = useState({
    id: id,
    name: "",
    email: ""
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9000/USER/" + id)
      .then((response) => {
        setValue({ ...value, name: response.data.name, email: response.data.email });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:9000/USER/" + id, value)
      .then((response) => {
        navigate("/User");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  <div className="Update">
      <div className="form-Update">
 
        <form onSubmit={handleSubmit} className="item-Update">
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
          <label style={{paddingRight: "250px"}} htmlFor="email">Email :</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Edit Your Email" 
            value={value.email} 
            onChange={(e) => setValue({ ...value, email: e.target.value })} 
          />
          <button type="submit">Update</button>
        </form>
      </div>
  </div>
  );
}