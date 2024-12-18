import React, { useEffect, useState } from 'react';
import { FaProductHunt, FaUsers } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import Counter from './Counter';
import Slider from './Slider';

const Hero = () => {
    const messages = ["Grab Now","Chose Now","Order Now"];
    const [message, setMessage] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
        if (charIndex < messages[messageIndex].length) {
        const timeout = setTimeout(() => {
            setMessage((prev) => prev + messages[messageIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setMessage("");
            setCharIndex(0);
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 1000);
        return () => clearTimeout(timeout);
        }
    }, [charIndex, messageIndex]);
    return (
        <div className='mx-auto min-h-screen'>
            <div className='relative'>
              <Slider />
              <div className="absolute right-10 bottom-20 z-20 underline text-buttonBG text-center font-barlow">
                <h1 className="text-right text-2xl md:text-2xl lg:text-2xl font-bold uppercase" >
                {message}
                </h1>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-2 col-span-1 z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="bg-buttonBG flex justify-center items-center gap-4 px-3 py-6 text-white">
                <div className='text-3xl text-red-600 bg-white p-3 rounded-2xl'><FaUsers/> </div>
                <div>
                    <p className='text-xl'> Happy Customers </p>
                    <p className='text-2xl font-bold flex'><Counter increment={1}  targetNumber={21} /> k</p>
                </div>
                
            </div>
            <div className="bg-orange-300 flex justify-center items-center gap-4 px-3 py-6 text-black">
                <div className='text-3xl text-white bg-buttonBG p-3 rounded-2xl'><FaBagShopping/> </div>
                <div>
                    <p className='text-xl'> Brands </p>
                    <p className='text-2xl font-bold flex'><Counter increment={2} targetNumber={20} />+</p>
                </div>
                
            </div>
            <div className="bg-buttonBG flex justify-center items-center gap-4 px-3 py-6 text-white">
                <div className='text-3xl text-red-600 bg-white p-3 rounded-2xl'><FaProductHunt/> </div>
                <div>
                    <p className='text-xl'> Products </p>
                    <div className='text-2xl font-bold flex'><Counter increment={1} targetNumber={600} /> +</div>
                </div>
                
            </div>
        </div>
            </div>
            
        </div>
    );
};

export default Hero;