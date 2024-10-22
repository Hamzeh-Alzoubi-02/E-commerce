import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Page/Auth/SignUp.js";
import Login from "./Page/Auth/Login.js";
import Home from "./Components/web/Home.js";
import Profile from "./Components/Pages/Profile.js";
import User from "./Components/Pages/User.js";
import Edit from "./Components/Pages/Edit.js";
import AddProdect from "./Components/Pages/AddProdect.js";
import EditProdect from "./Components/Pages/EditProdect.js";
import EProdect from "./Components/Pages/EProdect.js";
import Cart from "./Components/Pages/Cart.js";
export default function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<SignUp />} />
          <Route path="/Singup" element={<SignUp />} />

          <Route path="/Login" element={<Login  />} />  
          <Route path="/Home" element={<Home />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/User" element={<User />} />  
          <Route path="/Add" element={< AddProdect />}/>
          <Route path="/Edit" element={< EditProdect />} />
          <Route path="/EditProdect/:id" element={< EProdect />}/>
          <Route path="/Cart" element={<Cart />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
