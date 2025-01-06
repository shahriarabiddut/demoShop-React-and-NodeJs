import React from "react";
import top from "../assets/top.jpg";
import bottom from "../assets/bottom.jpg";
import { FaCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center justify-center gap-20 px-6 py-12 lg:px-16 bg-gray-300">
      <div className="flex flex-col gap-4 mb-16">
        <div className="relative">
          <img src={top} alt="Gymnastic" className="w-3/4 lg:w-4/5 h-auto " />
          <img
            src={bottom}
            alt="Stretching"
            className="absolute -bottom-16 right-1 w-4/5 translate-x-4 translate-y-4 "
          />
        </div>
      </div>
      <div className="text-center lg:text-left lg:w-4/5 mx-auto">
        <div className="w-10/12 mx-auto grid gap-2 mb-4">
          <h2 className="text-gray-600 text-center text-xl font-semibold font-barlow capitalize">
            Quality Matters
          </h2>
          <h2 className="text-buttonBG text-center text-6xl font-semibold font-barlow capitalize">
            About Us
          </h2>
        </div>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
          We Offer Quality Sports Gear
        </h1>
        <p className="mt-4 text-gray-600">
          We are dedicated to providing high-quality sports gear designed to
          enhance performance and comfort. Offering a wide range of durable and
          reliable equipment, we cater to athletes of all levels. Our mission is
          to support your fitness journey with top-notch products that meet your
          sporting needs.
        </p>
        <ul className="mt-6 space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <FaCheck className="text-buttonBG text-xl" /> Authentic Products
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="text-buttonBG text-xl" /> Quality Ensured
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="text-buttonBG text-xl" /> On Time Delivery
          </li>
        </ul>
        <button className="mt-6 btn bg-buttonBG text-white font-barlow text-xl w-full">
          View All Equipments
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
