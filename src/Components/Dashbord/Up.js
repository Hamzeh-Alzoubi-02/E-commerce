import { Link } from 'react-router-dom';
import logo from '../IMG/1600w-cpI8ixEpis8.webp';
export default function Up() {
    return (
        <div className="Up">
         <Link to='/Home'><img src={logo} alt="logo" className='logo'/></Link>
         <h1>Online Shop</h1>

        </div>
    );
}