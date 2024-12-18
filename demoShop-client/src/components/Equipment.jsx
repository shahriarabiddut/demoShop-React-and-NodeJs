import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { cssA, cssB, whiteHover } from '../utility/utility';

const Equipment = ({equipment,equipments,setEquipments,home}) => {
  const {
    _id,
    image,
    itemName,
    categoryId,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    soldQuantity,
    brand
  } = equipment;
  const handleDelete = (_id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/equipments/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your data has been deleted.",
                        icon: "success"
                      });
                      const remainingEquipment = equipments.filter(eq=> eq._id != _id);
                      setEquipments(remainingEquipment)
                }else{
                    Swal.fire({
                        title: "Error!",
                        text: "There was something Wrong.",
                        icon: "error"
                      });
                }
            })
            
          
        }
      });
}
  return (
    <div className="flex flex-wrap">
        <div className="card bg-base-100 shadow-xl flex-grow p-2 gap-3">
            <figure>
                <img
                src={image}
                alt={itemName} className='h-52 rounded-2xl' />
            </figure>
            <div className="card-body flex font-barlow">
                <h2 className="card-title text-2xl ">{itemName}</h2>
                <p className='text-xl'>Price : {price} $</p>
                <p className='text-xl'>Brand : {brand}</p>
                <p className='text-xl'>Category : {category}</p>
                <p className={`${stockStatus>0 ? ' text-green-500' : 'text-red-500'} text-xl`}>{stockStatus>0 ? ' In Stock' : 'Out Of Stock'}</p>
                <div className="card-actions justify-start">
                </div>
                {
                  home!=true ?
                    <div className="flex items-center justify-between gap-2">
                      <Link to={`/equipments/update/${_id}`}> <button className={cssB+whiteHover}> <FaPen/> Update</button></Link>
                      <Link to={`/equipments/${_id}`}> <button className={cssB+whiteHover}> <FaEye/> View</button></Link>
                      <button className={cssA+whiteHover} onClick={()=>{handleDelete(_id)}}><FaTrash></FaTrash> Delete</button>
                    </div>
                  :
                    <div className="flex items-center justify-between gap-2 mx-auto">
                      <Link to={`/equipments/${_id}`}> <button className={cssB+whiteHover + 'w-full'}> <FaEye/> View Details </button></Link>
                    </div>

                }
            </div>
        </div>
    </div>
  )
}


export default Equipment