import React from 'react'
import Equipment from './Equipment'

const RecentProducts = ({equipments,topSlogan,title}) => {
  return (
    <section className='bg-base-200 py-20'>
            <div className='lg:w-6/12 md:w-8/12 w-full mx-auto grid gap-2 mb-4'>
                <h2 className='text-gray-400 text-center text-xl font-semibold font-barlow capitalize'>{topSlogan}</h2>
                <h2 className='text-buttonBG text-center text-6xl font-semibold font-barlow capitalize'>{title}</h2>
            </div>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 w-11/12 mx-auto'>
      
       {equipments.slice(0,6).map((equipment) => (
                <Equipment key={equipment._id} equipment={equipment} home={true}></Equipment>
              ))}
    </div>
    </section>
  )
}

export default RecentProducts