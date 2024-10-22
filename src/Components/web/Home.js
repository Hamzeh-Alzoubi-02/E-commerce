import { Link } from "react-router-dom";
import Up from "../Dashbord/Up";
import profile from "../IMG/user.png";
import Peodect from "./Peodect";
import team from "../IMG/team.png";
import add from "../IMG/add-product.png";
import edit from "../IMG/edit.png";
export default function Home() {
    return (
        <div>
            <Up/>
            <div className="Empty">
              <div className="Profile">
                <div className="Father">
                
                <img src={profile} alt="profile" style={{width: "40px", height: "40px"}}/>
                <Link className="Profile1" to="/Profile" style={{color: "black", textDecoration: "none", fontSize: "20px",paddingLeft: "30px" }}>Profile</Link><br/> 
                </div>  
                <div style={{paddingTop: "100px"}}>
                <img src={team} alt="profile" style={{width: "40px", height: "40px"}}/>
                <Link to="/User" style={{color: "black", textDecoration: "none", fontSize: "20px",paddingLeft: "30px" }}> User </Link><br/>
                </div>
                <div style={{paddingTop: "100px"}}>
                <img src={add} alt="profile" style={{width: "40px", height: "40px"}}/>
                <Link to="/Add" style={{color: "black", textDecoration: "none", fontSize: "20px",paddingLeft: "30px" }}>Add Product</Link><br/>
                </div>
                <div style={{paddingTop: "100px"}}>
                <img src={edit} alt="profile" style={{width: "40px", height: "40px"}}/>
                <Link to="/Edit" style={{color: "black", textDecoration: "none", fontSize: "20px",paddingLeft: "30px" }}>Edit Product</Link><br/>
               
                </div>
               </div>
              <div >
                   <Peodect/>
              </div>
            </div>
        </div>
    );
}