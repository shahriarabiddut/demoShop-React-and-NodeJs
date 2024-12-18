import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import Ratings from '../components/Ratings';
import SimillarSlider from '../components/SimillarSlider';
import PageSlogan from '../components/PageSlogan';

const ViewEquipment = () => {
    const equipment = useLoaderData();
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
    // console.log(equipment);
    return (
        <>
        <Helmet>
                <title>{`${itemName}`} | EquiSports</title>
        </Helmet>
          <section className="grid text-base-content bg-base-100 gap-5">
            <div className="pt-20 lg:w-6/12 md:w-8/12 w-full mx-auto grid">
                <PageSlogan title={`${category} Equipment `}/>
                <progress className="progress w-56 mx-auto bg-buttonBG "></progress>
            </div>
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto w-11/12 py-20">
                <div className="flex justify-center">
                    <img src={image} alt={itemName} className='w-10/12 border-2 border-base-200 rounded-xl p-1 bg-orange-400 shadow-2xl' />
                </div>
                <div className="overflow-x-auto flex flex-col gap-3">
                    <h2 className="text-4xl font-barlow font-semibold text-buttonBG">{itemName}</h2>
                    <h3 className="text-2xl font-barlow font-semibold text-buttonBG">$ {price} </h3>
                    <h3 className="text-2xl font-barlow font-semibold text-gray-600">{brand} </h3>
                    <p className='text-xl font-barlow '><span className='font-semibold'>Description : </span>  {description}</p>
                    <p className='text-xl font-barlow '><span className='font-semibold'>Customization : </span>  {customization}</p>
                    <p className='text-xl font-barlow '><span className='font-semibold'>Delivery Time : </span>  {processingTime}</p>
                    <p className='text-xl font-barlow '><span className='font-semibold'>{soldQuantity}</span> items allready sold!</p>
                    <p className='text-xl font-barlow '><span className='font-semibold'>Category : </span>  {category}</p>
                    <div className='text-xl font-barlow '> <Ratings rating={rating} /></div>
                    <p className={`${stockStatus>0 ? ' text-green-500' : 'text-red-500'} text-xl font-barlow font-semibold`}>{stockStatus>0 ? ' In Stock' : 'Out Of Stock'}</p>
                </div>
                
            </div>
            {/* <div className="my-6">
                <SimillarSlider categoryId={categoryId} />
            </div> */}
          </section>
    </>
    );
};

export default ViewEquipment