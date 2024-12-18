import React, { useEffect, useState } from 'react'
import Equipment from './Equipment';
import Loading from './Loading';

const SimillarSlider = ({categoryId}) => {
    
  const [equipments,setEquipments] = useState([]);
  const [loader,setLoader] = useState(true);
    useEffect(()=>{
        // Email By
        fetch(`http://localhost:5000/equipments/simillar/${categoryId}`)
          .then((response) => response.json()) 
          .then((data) => {
            console.log(data);
            setEquipments(data);
          })
          .catch((error) => {
            console.error( error);
          });
        //
        setTimeout(()=>{setLoader(false)},1000)
        console.log(equipments);
      },[])
  return (
    <div>
        {
        loader ? (
          <Loading />
        ) : equipments.length === 0 ? (
          <p className='flex justify-center my-4 font-rancho text-5xl'>No Simillar Data Found</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {equipments.slice(0, 3).map((equipment) => (
                <Equipment key={equipment.id} equipment={equipment}></Equipment>
            ))}
            </div>
          </>
        )
      }
    </div>
  )
}

export default SimillarSlider