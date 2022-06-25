import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accesToken')
    };
    return (
        <div className="navbar fixed top-0 z-10 lg:px-36 lg:py-10">
            <div className="navbar-start flex items-center space-between">
                <Link to='/' className="btn btn-ghost mr-20"><img src={logo} width='120px' height='56px' alt="" />
                </Link>
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-warning lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li className='text-white'><Link to="/" >News</Link></li>
                        <li className='text-white'><Link to="/items">Destination</Link></li>
                        <li className='text-white'><Link to="/blogs">Blogs</Link></li>
                        <li className='text-white'><Link to="/team">Contact</Link></li>
                        <li>
                            {user ?
                                <button className='btn btn-warning font-bold text-black' onClick={logout} >Logout</button> : <Link to="/login" className='btn btn-warning font-bold text-black' >Login</Link>
                            }
                        </li>
                    </ul>
                </div>

                <form action="" className='hidden lg:block'>
                    <input type="text" placeholder='Search your Destination...' className='input input-bordered placeholder:text-white w-[370px] bg-transparent' style={{ border: '1px solid #ffff' }} />
                </form>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0  items-center">
                    <li className='text-white'><Link to="/" >News</Link></li>
                    <li className='text-white'><Link to="/items">Destination</Link></li>
                    <li className='text-white'><Link to="/blogs">Blogs</Link></li>
                    <li className='text-white'><Link to="/team">Contact</Link></li>
                    <li>
                        {user ?
                            <button className='btn btn-warning font-bold text-black' onClick={logout} >Logout</button> : <Link to="/login" className='btn btn-warning font-bold text-black' >Login</Link>
                        }
                    </li>
                </ul>
            </div>
            <div className='ml-28 lg:ml-0'>
                {user &&
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className=" btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>}
            </div>
        </div>
    );
};

export default Navbar;