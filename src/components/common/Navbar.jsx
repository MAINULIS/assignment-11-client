import { Link } from "react-router-dom";
import logo from '../../assets/image.ico'

const Navbar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/">All Toys</Link></li>
        <li><Link to="/">My Toys</Link></li>
        <li><Link to="/">Add A Toy</Link></li>
        <li><Link to="/">Blogs</Link></li>

    </>
    return (
        <div className="navbar h-32 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                        <Link className="md:hidden" to="/profile">
                            <img
                                data-te-toggle="tooltip"
                                // title={`Hi! I'm ${user?.displayName}`}
                                src={'' || "https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
                                className="w-12 rounded-full"
                                alt="Avatar"
                            />
                        </Link>
                    </ul>
                </div>
                <div className='inline-flex'>
                    <Link to='/'><img src={logo} alt="" /></Link>
                    <h2 className='text-1xl md:text-2xl text-nowrap md:pt-6 text-cyan-950 font-bold'>TOY CARS HUT</h2>
                </div>
            </div>
            <div className="navbar-center text-cyan-950 hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold ">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-5 text-white">
                <Link>
                    <button className="btn bg-cyan-950 hover:bg-cyan-900 text-white">Login</button>
                </Link>
                <Link className="hidden lg:flex" to="/profile">
                    <img
                        data-te-toggle="tooltip"
                        // title={`Hi! I'm ${user?.displayName}`}
                        src={'' || "https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
                        className="w-12 rounded-full"
                        alt="Avatar"
                    />
                </Link>

            </div>
        </div>
    );
};

export default Navbar;