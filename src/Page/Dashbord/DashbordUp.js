import { Link } from "react-router-dom";

export default function Dashbord() {
    return (
        <div className="DashbordUp">
            <h1>Onilne Shop</h1>
            <ul className="list">
               
                <Link to="/Login">Log in</Link>
                <Link to="/Singup">Sign Up</Link>
            </ul>

        </div>
    );
}