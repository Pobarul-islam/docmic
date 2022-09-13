import './Navbar.css'
import { Link } from 'react-router-dom';
export default function NavBar() {
    const menuItem = <>
       <li><Link className='text-primary' to="/">Home</Link></li>
       <li><Link to="/">About</Link></li>
       <li><Link to="/">Departments</Link></li>
       <li><Link to="/">Pages</Link></li>
       <li><Link to="/">Blog</Link></li>
       <li><Link to="/">Contacts</Link></li>
    </>

    return (
       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex= {0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex= {0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItem}
      </ul>
    </div>
    <a  className="btn btn-ghost font-bold normal-case text-xl"><span className="ml-5 doc">Doc</span> <span className='mic'>mic.</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
  <div className="navbar-end consulation">
    <a  className="btn btn-primary mr-10">Free Consulation</a>
  </div>
</div>
    );
}