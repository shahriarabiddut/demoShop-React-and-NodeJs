import React from 'react';
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import load404 from "../assets/lottie/404.json";

const ErrorPage = () => {
  return (
    <HelmetProvider>
            <Helmet>
                <title>Page Not Found | EquiSports: (A Sports Equipment Store)</title>
            </Helmet>
        <main>
          <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-base-content gap-3">
          <Lottie animationData={load404} className="w-64 h-64 md:w-96 md:h-96"  />
          <p className="text-lg mb-8">
              Oops! The page you are looking for does not exist.
          </p>
          <Link to="/" className="bg-teal-700 text-white p-5 font-semibold font-montserrat cursor-pointer hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 flex rounded-lg gap-4 items-center text-xl">
             <FaHome></FaHome> Home
          </Link>
          </div>
        </main>
    </HelmetProvider>
  );
};

export default ErrorPage;
