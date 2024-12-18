import React, { useState } from 'react';
import EquipmentSports from './EquipmentSports';
import Equipment from './Equipment';

const SportsCategory = ({equipments,topSlogan,title,category}) => {
    const purpleHover = "bg-gray-200 p-2 rounded-lg hover:bg-orange-700 hover:text-white ";
    const active = "bg-orange-700 p-2 rounded-lg text-white bold";
    const [products,setProducts] = useState(equipments);
    const [selectedCategory,setSelectedCategory] = useState(0);
    const handleCategoryBtn = (id)=>{
      if(id==0){setProducts(equipments)} 
      else{
        fetch(`http://localhost:5000/equipmentsSameCategory/${id}`).then(res=>res.json()).then(data=>{setProducts(data);});
      }
        setSelectedCategory(id);
    }
  return (
    <section className='bg-base-200 py-20'>
            <div className='lg:w-6/12 md:w-8/12 w-full mx-auto grid gap-2 mb-4'>
                <h2 className='text-gray-400 text-center text-xl font-semibold font-barlow capitalize'>{topSlogan}</h2>
                <h2 className='text-buttonBG text-center text-6xl font-semibold font-barlow capitalize'>{title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 font-barlow w-11/12 mx-auto my-20">
            <div className="col-span-1">
                <div className='flex flex-row md:flex-col lg:flex-col gap-4 p-8 w-11/12 mx-auto my-3 bg-white rounded-2xl flex-wrap'>
                <button className={ selectedCategory==0? active : purpleHover} onClick={()=>{handleCategoryBtn(0)}}>All Product</button>
                {category.map( cat =>
                    <button onClick={()=>{handleCategoryBtn(cat.id)}} className={ selectedCategory==cat.id? active : purpleHover} key={cat.id}>{cat.categoryName}</button>
                )}
                </div>
                
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              { products.slice(0,6).map((equipment) => (
                <EquipmentSports key={equipment._id} equipment={equipment} ></EquipmentSports>
              ))}
            </div>
        </div>
    </section>
  )
}

export default SportsCategory