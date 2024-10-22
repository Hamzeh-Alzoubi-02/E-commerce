import axios from "axios";
import { useEffect, useState } from "react"

export default function Produect() {
    const [product,setProduct]=useState([]);
    const [number1 ,setNumber1]=useState(0);
   
    useEffect(()=>{
       fetch("http://localhost:8000/images")
        .then((res)=>res.json())
        .then((res)=>setProduct(res))

 
    },[])
    function NUMBER(){
        setNumber1(number1+1)
    }
    function NUMBERS(){
        setNumber1(number1-1)
    }
    const Show=product.map((product,index)=>
        <tr key={index}>
        <img src={product.img} alt="Product" style={{width:"40px",height:"40px"}}/>
       <td>{product.price}</td>
       <td>
        <td>{number1}</td>
       <button onClick={NUMBER}>+ </button>
       <button onClick={NUMBERS}>-</button>
         </td>
         </tr>
    )
    return (
        <div className="Cart1">
            <h1>Your Shopping Cart</h1>
            <div>
            <table className="TABEL">
     <thead>
        <tr>
            <th style={{borderBottom:"2px solid red"}}> Product </th>
            <th style={{borderBottom:"2px solid red"}}>  Price </th>
            <th style={{borderBottom:"2px solid red"}}> Quantity </th>
           
             
             
        </tr>
    </thead>
    <tbody>
        
       {Show}
           
        
        
        </tbody>
    </table>
            </div>
        </div>
    )
}