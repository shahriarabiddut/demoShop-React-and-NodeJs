import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SiLevelsdotfyi } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import Equipment from '../components/Equipment';
import Loading from '../components/Loading';
import PageSlogan from '../components/PageSlogan';
import Pagination from '../components/Pagination';
import { AuthContext } from '../provider/AuthProvider';
import { activeCss, cssA, whiteHover } from '../utility/utility';

const UserEquipments = () => {
  const {showToast,user} = useContext(AuthContext);
  const [equipments,setEquipments] = useState([]);
  const [loader,setLoader] = useState(true);
  const email = user.email;
  useEffect(()=>{
    // Email By
    fetch('https://pha10-server.vercel.app/equipmentsUser', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ email }), 
    })
      .then((response) => response.json()) 
      .then((data) => {
        // console.log(data);
        setEquipments(data);
      })
      .catch((error) => {
        console.error( error);
      });
    //
    setTimeout(()=>{setLoader(false)},1000)
  
  },[])
  
  const handleSort = () =>{
    const sortedList = [...equipments].sort((a,b) => b.price * 10 - a.price * 10 );
    setEquipments(sortedList);
    showToast('Sorted Descending By Price!','info')
  }
  // Pagination 
  const [currentIndex, setCurrentIndex] = useState(1);
  const equipmentsPerPage = 9;
  const totalPages = Math.ceil(equipments.length / equipmentsPerPage);
  const currentEquipentData = equipments.slice(
    (currentIndex - 1) * equipmentsPerPage,
    currentIndex * equipmentsPerPage
  );
  return (
    <div className='w-11/12 mx-auto py-20 space-y-4'>
      <Helmet>
      <title>My Equipments | EquiSports</title>
      </Helmet>
      <PageSlogan title={'My Equipments'}/>
      
      <div className='flex flex-row items-center justify-end gap-3'>
          <button className={activeCss+whiteHover} onClick={()=>handleSort()}> Sort By Price <SiLevelsdotfyi /></button>
          <NavLink to={'/equipments/add'}  className={cssA+whiteHover} > Add Equipments</NavLink>
      </div>
      <div >
      {
        loader ? (
          <Loading />
        ) : equipments.length === 0 ? (
          <p className='flex justify-center my-4 font-rancho text-5xl'>No Data Found</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentEquipentData.map((equipment) => (
                <Equipment key={equipment._id} equipment={equipment} setEquipments={setEquipments} equipments={equipments}></Equipment>
              ))}
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <Pagination
                key={equipmentsPerPage}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                totalPages={totalPages}
              />
            </div>
          </>
        )
      }
      </div>
    </div>
  )
}

export default UserEquipments