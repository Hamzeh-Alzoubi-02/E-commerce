import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import card from "../IMG/shopping-cart.png";
export default function Peodect() {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState('');
    const [add, setAdd] = useState(0);
    const [run, setRun] = useState(false);  
     
    useEffect(() => {
        fetch('http://localhost:8000/images')
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);
function Add() {
    setAdd(add + 1);
setRun(!run);
console.log(run);
     
    

}
function Close() {
    setRun(!run);
}
    const show = user.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())).map((user, index) => (
        <div key={index} className="Peodect"> 
            <img src={user.img} alt={`image-${index}`} style={{ width: "200px", height: "200px" }} />
            <h2>{user.name}</h2>
            <h3>{user.price}</h3>
            <h4>{user.description}</h4>
             
            <button onClick={Add} type="submit" style={{ cursor: "pointer" }}>Add to cart</button>
            
        </div>
    ));

    function Yes() {
        setAdd(add + 1);
        console.log(add);
         setRun(!run);
         window.location.href = "/Cart";
    }

    function NO() {
        setRun(!run);
    }

    return (
        <>
         
        <div className="Search"> 
        <input type="search" placeholder="Search to Prodect" style={{width:"300px",height:"30px",fontSize:"20px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",color:"black",border:"1px solid black",paddingLeft:"10px",margin:"10px"}} value={search} onChange={(e) => setSearch(e.target.value)} />

        <Link to="/Cart" className="Cart"><img src={card} alt="profile" style={{width: "40px", height: "40px"}}/></Link>

          
        </div>
        <div className="father-peodect">
             
        {show.includes("") ? <h1>Loading...</h1> : show}
        {run &&
        <>
         <div  className="AddCart"> 
         <button onClick={Close} className="Close" type="submit" style={{ cursor: "pointer" }}>Close</button>
          
            <h1>Do you want to add to cart?</h1>
          <div className="Add2">
            <button className="Yes" onClick={Yes} type="submit" style={{ cursor: "pointer" }}>Yes</button>
            <button className="No" onClick={NO} type="submit" style={{ cursor: "pointer" }}>No</button>
         </div>
          </div>
          
         </> 
        }


        
         

        
 
</div>
</>
)}
