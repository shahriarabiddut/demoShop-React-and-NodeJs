import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EquipmentSports = ({equipment}) => {
  const {
    _id, image, itemName, price, processingTime, stockStatus, brand
  } = equipment;
  return (
    <div className="flex flex-wrap">
        <div className="flex bg-base-100 shadow-xl flex-1 flex-col rounded-xl p-1 gap-1">
            <figure className='relative'>
                <img
                src={image}
                alt={itemName} className='h-52 mx-auto rounded-2xl' />
                
                <p className={`${stockStatus>0 ? ' bg-green-500' : 'bg-red-500'} p-2 rounded-xl text-white text-xl absolute top-0 right-0`}>{stockStatus>0 ? ' In Stock' : 'Out Of Stock'}</p>
            </figure>
            <div className="flex flex-col font-barlow rounded-b-2xl bg-slate-100 p-3 m-2 gap-2">
                <h2 className="font-bold text-3xl text-center">{itemName}</h2>
                <p className='text-xl '>Price : {price} $ </p>
                <p className='text-xl '>Brand : {brand} </p>
                <p className='text-xl '>Delivery : {processingTime} </p>
                <div className="card-actions justify-start">
                </div>
                <div className="flex items-center justify-between gap-2 mx-auto">
                      <Link to={`/equipments/${_id}`}> <button className='btn btn-info w-full'> <FaEye/> View Details </button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}


export default EquipmentSports