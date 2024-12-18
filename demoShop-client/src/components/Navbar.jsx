import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';
import { AuthContext } from '../provider/AuthProvider';
import { links } from '../utility/utility';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar({toggleTheme,theme}) {
  const {user,logOut} = useContext(AuthContext);
  const[toggle,setToggle] = useState(false);
  const navLinks = links;
  return (
    <>
      <div
        className={`text-white transition-all ease-in-out duration-300 bg-black `}
      >
        <div className="flex justify-between items-center w-11/12 mx-auto ">
          <div>
            <Link to={'/'} className="btn btn-ghost text-white text-3xl font-rancho">EquiSports</Link>
          </div>
          <div className='font-barlow text-2xl'>
            
          <ul className="menu menu-horizontal hidden flex-1 items-center sm:flex flex-row gap-2 lg:gap-4 md:gap-1  text-xl">
          {
            navLinks.map((navlink)=>(
              <li key={navlink.id} className={`hover:text-white hover:underline font-medium cursor-pointer`}>
                <NavLink to={`/${navlink.id}`}>{navlink.title}</NavLink>
              </li>
            ))
          }
          {
            user != null ? 
            <>
            
            <li className='hidden lg:flex md:flex'>
              <details>
                <summary className={' bg-buttonBG text-white border-1 border-red-600 rounded-xl hover:bg-red-600'}>
                <div className={'gap-2 flex'} data-tooltip-id="my-tooltip"> <img src={user.photoURL} className='w-8 h-8 rounded-xl' alt="" /> My Account</div>
                </summary>
                <ul className="p-2 gap-2 menu">
                  <li><NavLink to={`/profile`} className={'btn bg-buttonBG text-white border border-red-600 rounded-xl hover:bg-red-600'}>My Profile</NavLink></li>
                  <li><NavLink to={'/equipments/myEquipments'} className={'btn bg-buttonBG text-white border border-red-600 rounded-xl hover:bg-red-600'}>My Equipments</NavLink></li>
                  <li><NavLink to={'/equipments/add'} className={'btn bg-buttonBG text-white border border-red-600 rounded-xl hover:bg-red-600'}>Add Equipments</NavLink></li>
                  <li><button onClick={()=>{logOut()}} className={'btn bg-buttonBG text-white border border-red-600 rounded-xl hover:bg-red-600'}>Logout</button></li>
                </ul>
              </details>
            </li>

            <Tooltip id="my-tooltip">
              <div className='grid justify-center items-center gap-2 py-2 my-2'>
                <div className='mx-auto'><img src={user.photoURL} className='w-16 h-16 rounded-xl' alt="" /></div>
                <h3>Welcome, {user.displayName}</h3>
                <p>Email : {user.email}</p>
                <p>Last Logged In : {user.metadata.lastSignInTime}</p>
              </div>
            </Tooltip>
            </>
            :
            <li className='flex gap-2'>
            <NavLink to={`/auth/login`} className={'btn bg-buttonBG text-white border border-red-600 rounded-xl hover:bg-red-600'}>Login | Register</NavLink>
            </li>

          }
          
          <li><button type='button' onClick={toggleTheme} className='bg-cyan-800' > {theme === 'light' ? <FaMoon className='text-white'/> : <FaSun className='text-yellow-400'/>} </button></li>
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle? close : menu} alt={'menu'} className='w-7 h-7 object-contain cursor-pointer' onClick={()=> setToggle(!toggle)}/>
            <div className={`${toggle ?'flex' :'hidden'} p-1 bg-black absolute top-20 right-0 mx-4 my-2 min-w-36 z-10 rounded-xl`} >
              <ul className="list-none flex flex-col justify-end items-start gap-3">
              {
                navLinks.map((navlink)=>(
                  <li key={navlink.id} className={`hover:bg-white hover:underline hover:text-black p-2 rounded-lg font-medium cursor-pointer`} onClick={()=>{setToggle(!toggle);}}>
                    <NavLink to={`/${navlink.id}`}>{navlink.title}</NavLink>
                  </li>
                ))
              }
            </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
