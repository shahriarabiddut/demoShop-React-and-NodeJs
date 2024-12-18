import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { FaMoon, FaSun } from 'react-icons/fa';

const BottomUser = ({toggleTheme,theme}) => {
    const{user,logOut} = useContext(AuthContext);
  return (
    <div className='bg-black py-2'>
        {
            user != null && 
            <>
            <Tooltip id="my-tooltip">
              <div className='grid justify-center items-center gap-2 py-2'>
                <div className='mx-auto'><img src={user.photoURL} className='w-16 h-16 rounded-xl' alt="" /></div>
                <h3>Welcome,  {user.displayName}</h3>
                <p>Email : {user.email}</p>
                <p>Last Logged In : {user.metadata.lastSignInTime}</p>
              </div>
            </Tooltip>
            <div className="flex gap-3 font-bold font-barlow w-11/12 mx-auto">
                <div data-tooltip-id="my-tooltip" className={'p-2 text-xl gap-2 flex bg-buttonBG justify-center text-white border-1 border-red-600 rounded-xl hover:bg-red-600 flex-1'}> <img src={user.photoURL} className='w-6 h-6 rounded-xl' alt="" /> <NavLink to={`/profile`} >Profile</NavLink></div>
                <div  className='p-2 text-xl bg-buttonBG text-center text-white border border-red-600 rounded-xl hover:bg-red-600 flex-1'><NavLink to={'/equipments/myEquipments'}  > Equipments</NavLink></div>
                <div  className='p-2 text-xl bg-buttonBG text-center text-white border border-red-600 rounded-xl hover:bg-red-600 flex-1'><button onClick={()=>{logOut()}} >Logout</button></div>
                <div className='p-2 text-xl bg-cyan-800 rounded-xl'><button type='button' onClick={toggleTheme} className='' > {theme === 'light' ? <FaMoon className='text-white'/> : <FaSun className='text-yellow-400'/>} </button></div>
            </div>
            </>

          }
    </div>
  )
}

export default BottomUser