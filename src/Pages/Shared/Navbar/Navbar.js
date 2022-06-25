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
        <div className="navbar fixed top-0 z-10 lg:px-36 lg:py-10 px-6 py-6">
            <div className="navbar-start flex items-center space-between">
                <div className="dropdown mr-16">
                    <label tabIndex="0" className="btn btn-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact bg-white bg-opacity-25 dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li className='text-white'><Link to="/" >News</Link></li>
                        <li className='text-white'><Link to="/items">Destination</Link></li>
                        <li className='text-white'><Link to="/blogs">Blogs</Link></li>
                        <li className='text-white'><Link to="/team">Contact</Link></li>
                        <li>
                            {user ?
                                <button className='btn btn-primary font-bold text-black' onClick={logout} >Logout</button> : <Link to="/login" className='btn btn-primary font-bold text-black' >Login</Link>
                            }
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost mr-20"><img src={logo} width='120px' height='56px' alt="" />
                </Link>
                <form class="items-center hidden lg:flex">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5 input input-bordered placeholder:text-white w-[370px] bg-white bg-opacity-25" style={{ border: '1px solid #ffff' }} placeholder="Search your Destination... " required />
                    </div>
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
                            <button className='btn btn-primary font-bold text-black' onClick={logout} >Logout</button> : <Link to="/login" className='btn btn-primary font-bold text-black' >Login</Link>
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