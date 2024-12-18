import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SiLevelsdotfyi } from "react-icons/si";
import { NavLink, useLoaderData } from 'react-router-dom';
import PageSlogan from '../components/PageSlogan';
import Pagination from '../components/Pagination';
import { AuthContext } from '../provider/AuthProvider';
import { activeCss, cssA, whiteHover } from '../utility/utility';
import { FaEye } from 'react-icons/fa';

const AllEquipments = () => {
  const {showToast,user,loading} = useContext(AuthContext);
  const loadedEquipments = useLoaderData()
  const [equipments,setEqupements] = useState(loadedEquipments);
  const handleSort = () =>{
    const sortedList = [...equipments].sort((a,b) => b.price * 10 - a.price * 10 );
    setEqupements(sortedList);
    showToast('Sorted Descending By Price!','info')
  }
  // Pagination 
  const [currentIndex, setCurrentIndex] = useState(1);
  const equipmentsPerPage = 10;
  const totalPages = Math.ceil(equipments.length / equipmentsPerPage);
  const currentEquipentData = equipments.slice(
    (currentIndex - 1) * equipmentsPerPage,
    currentIndex * equipmentsPerPage
  );
  // From Array
  // const handlePageChange = (page) => {
  //   setCurrentIndex(page); 
  // };
  return (
    <div className='w-11/12 mx-auto py-20 space-y-4'>
      <Helmet>
      <title>All Sports Equipments | EquiSports</title>
      </Helmet>
      <PageSlogan title={'All Sports Equipments'}/>
      
      <div className='flex flex-row items-center justify-end gap-3'>
          <button className={activeCss+whiteHover} onClick={()=>handleSort()}> Sort By Price <SiLevelsdotfyi /></button>
          {
            (user!=null && loading == false ) && <>
                <NavLink to={'/equipments/myEquipments'}  className={cssA+whiteHover}> My Equipments</NavLink>
            </>
          }
      </div>
      <div >
      <div className="overflow-x-auto my-4 bg-orange-50">
        <table className="table table-zebra font-barlow text-xl">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              currentEquipentData.map( equipment =>
                  <tr key={equipment._id}>
                    <td>{equipment.itemName}</td>
                    <td>{equipment.category}</td>
                    <td>{equipment.price}</td>
                    <td className='flex justify-center'><NavLink to={`/equipments/${equipment._id}`}  className={'btn btn-info font-rancho'}><FaEye/> &nbsp;View</NavLink></td>
                  </tr>
              )
          }
          </tbody>
          <tfoot>
            <tr>
            <td colSpan={'4'}><Pagination key={equipmentsPerPage} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} totalPages={totalPages} /></td>
            </tr>
          </tfoot>
        </table>
      </div>
      </div>
    </div>
  )
}

export default AllEquipments