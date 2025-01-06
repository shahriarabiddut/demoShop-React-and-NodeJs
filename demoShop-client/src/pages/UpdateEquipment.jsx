import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageSlogan from '../components/PageSlogan';
import { AuthContext } from '../provider/AuthProvider';
import { cssA, whiteHover } from '../utility/utility';

function UpdateEquipment() {
  const {user,showToast} = useContext(AuthContext);
  const navigate = useNavigate();
  const equipment = useLoaderData();
  const {
    _id,image,itemName,categoryId,category,description,price,rating,customization,processingTime,stockStatus,soldQuantity,brand,userEmail,userName
  } = equipment;
  const [ categoryLoad,setCategoryLoad] = useState([]);
  const [ eCategoryId,seteCategoryId] = useState(categoryId);
  useEffect(()=>{
    
    fetch('https://pha10-server.vercel.app/category')
    .then((response) => response.json()) 
    .then((data) => {
      console.log(data);
      setCategoryLoad(data);
    })
  },[]);
  
  // console.log(categoryLoad);
    const handleUpdateEquipment = (e)=>{
        e.preventDefault();
        const form = e.target;
        const updatedimage = form.image.value;
        const updateditemName = form.itemName.value;
        const updatedcategoryId = parseInt(form.categoryId.value);
        const updatedcategory = categoryLoad.find(c=>c.id==categoryId).categoryName;
        const updateddescription = form.description.value;
        const updatedprice = parseInt(form.price.value);
        const updatedrating = form.rating.value;
        const updatedcustomization = form.customization.value;
        const updatedprocessingTime = form.processingTime.value;
        const updatedstockStatus = parseInt(form.stockStatus.value);
        const updatedsoldQuantity = parseInt(form.soldQuantity.value);
        const updatedbrand = form.brand.value;
        const updatedEquipment = {updatedimage, updateditemName, updatedcategoryId, updatedcategory, updateddescription, updatedprice, updatedrating, updatedcustomization, updatedprocessingTime, updatedstockStatus, updatedsoldQuantity, updatedbrand};
        if(user.email != userEmail) {
          showToast("You don't Have Permission",'error');
          navigate('/equipments/myEquipments');
        }else{
        fetch(`https://pha10-server.vercel.app/equipments/${_id}`,{
             method:'PUT',
             headers:{
                'content-type':'application/json'
             },
             body:JSON.stringify(updatedEquipment),
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Updated Equipemnt!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })}
        
    }
  return (
    <div>
        <Helmet>
          <title>Update Equipment | EquiSports</title>
        </Helmet>
        <div className="form mx-auto w-11/12 bg-base-200 px-4 py-8 my-20 rounded-xl">
          <PageSlogan title={`Update Equipment : ${itemName}`}/>
            <form onSubmit={handleUpdateEquipment} className='py-2'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 font-barlow">
                    <div className="grid gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Photo Url : </span>
                        <input type="text" name='image' className="grow" required defaultValue={image} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Name :</span>
                        <input type="text" name='itemName' className="grow" required defaultValue={itemName} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Category :</span> 
                        <select className="grow" required name='categoryId' value={eCategoryId} onChange={(e)=>seteCategoryId(e.target.value)}>
                          {categoryLoad.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                          ))}
                        </select>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Description :</span>
                        <input type="text" name='description' className="grow" required defaultValue={description}/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Price :</span>
                        <input type="text" name='price' className="grow" required defaultValue={price} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Rating :</span>
                        <input type="number" name='rating' max={5} min={1} step="0.1"  className="grow" required defaultValue={rating} />
                        </label>
                    </div>
                    <div className="grid gap-4">
                    <label className="input input-bordered flex items-center gap-2">
                         <span className='font-semibold'> Processing Time :</span>
                        <input type="text" name='processingTime' className="grow" required defaultValue={processingTime} />
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Stock :</span>
                        <input type="number" min={1} name='stockStatus' className="grow" required defaultValue={stockStatus} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Total Sold :</span>
                        <input type="number" min={1} name='soldQuantity' className="grow" required defaultValue={soldQuantity} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Brand :</span>
                        <input type="text" name='brand' className="grow" required defaultValue={brand}/>
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Customization :</span>
                        <input type="text" name='customization' className="grow" required defaultValue={customization} />
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>User :</span>
                        <input type="text" name='userName' className="grow" required readOnly value={user.displayName} />
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Email :</span>
                        <input type="text" name='userEmail' className="grow" required readOnly value={user.email} />
                        </label>
                    </div>
                </div>
                <button type="submit" className={cssA + whiteHover + ' w-full'}> Update </button>
            </form>
        </div>
    </div>
  )
}

export default UpdateEquipment