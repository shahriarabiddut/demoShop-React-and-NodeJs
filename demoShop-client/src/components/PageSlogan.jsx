import React from 'react';

const PageSlogan = ({title}) => {
    return (
        <>
            <div className='lg:w-6/12 md:w-8/12 w-full mx-auto grid gap-4 mb-4'>
                <h2 className='text-buttonBG text-center text-4xl font-semibold font-barlow'>{title}</h2>
                <h4 className='text-xs font-rancho text-center text-gray-400 italic'>EquiSports</h4>
            </div>
        </>
    );
};

export default PageSlogan;