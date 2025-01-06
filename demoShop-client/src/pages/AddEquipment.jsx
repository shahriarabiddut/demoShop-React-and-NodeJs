import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageSlogan from '../components/PageSlogan';
import { AuthContext } from '../provider/AuthProvider';
import { cssA, whiteHover } from '../utility/utility';

function AddEquipment() {
  const {user} = useContext(AuthContext);
  const categoryLoad = useLoaderData();
  console.log(categoryLoad);
    const handleAddEquipment = (e)=>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const itemName = form.itemName.value;
        const categoryId = parseInt(form.categoryId.value);
        const category = categoryLoad.find(c=>c.id==categoryId).categoryName;
        // console.log(categoryId,category)
        const description = form.description.value;
        const price = parseInt(form.price.value);;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = parseInt(form.stockStatus.value);
        const soldQuantity = 0;
        const brand = form.brand.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const newEquipment = {image, itemName, categoryId, category, description, price, rating, customization, processingTime, stockStatus, soldQuantity, brand,userEmail,userName};
        fetch('https://pha10-server.vercel.app/equipments',{
             method:'POST',
             headers:{
                'content-type':'application/json'
             },
             body:JSON.stringify(newEquipment),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Added A New Equipemnt!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset();
        })
        
    }
  return (
    <div>
        <Helmet>
          <title>Add New Equipment | EquiSports</title>
        </Helmet>
      
        <div className="form mx-auto w-11/12 bg-base-200 px-4 py-8 my-20 rounded-xl">
          <PageSlogan title={'Add New Equipment'}/>
            <form onSubmit={handleAddEquipment} className='py-2'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 font-barlow">
                    <div className="grid gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Photo Url : </span>
                        <input type="text" name='image' className="grow" required placeholder="Photo Url" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Name :</span>
                        <input type="text" name='itemName' className="grow" required placeholder="Item Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Category :</span> 
                        <select className="grow" required name='categoryId'>
                          {categoryLoad.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                          ))}
                        </select>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Description :</span>
                        <input type="text" name='description' className="grow" required placeholder="Product Description" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Price :</span>
                        <input type="text" name='price' className="grow" required placeholder="Product Price" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Rating :</span>
                        <input type="number" name='rating' step="0.1"  max={5} min={1} className="grow" required placeholder="Product Rating" />
                        </label>
                    </div>
                    <div className="grid gap-4">
                    <label className="input input-bordered flex items-center gap-2">
                         <span className='font-semibold'> Processing Time :</span>
                        <input type="text" name='processingTime' className="grow" required defaultValue="Example : 3-5 business days" />
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Stock :</span>
                        <input type="number" min={1} name='stockStatus' className="grow" required placeholder="Product Stock Quantity" />
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Brand :</span>
                        <input type="text" name='brand' className="grow" required placeholder="Product Brand" />
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Customization :</span>
                        <input type="text" name='customization' className="grow" required defaultValue={'Example : Extra grip'} />
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>User :</span>
                        <input type="text" name='userName' className="grow" required readOnly value={user.displayName} />
                        </label><label className="input input-bordered flex items-center gap-2">
                        <span className='font-semibold'>Email :</span>
                        <input type="text" name='userEmail' className="grow" required readOnly value={user.email} />
                        </label>
                    </div>
                </div>
                <button type="submit" className={cssA + whiteHover + ' w-full'}> Submit </button>
            </form>
        </div>
    </div>
  )
}

export default AddEquipment