import React from "react";
import { Helmet } from "react-helmet-async";
import about from "../assets/photo/about.png";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | EquiSports</title>
      </Helmet>
      <section className="">
        <div className="min-h-screen py-10 md:py-20 gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto w-11/12">
          <div className="col-span-1 flex items-center">
            <img src={about} alt="About Us" />
          </div>
          <div className="px-2 flex flex-col gap-2 font-barlow col-span-1 md:col-span-2">
            <h2 className="lg:text-left text-center text-3xl font-semibold font-barlow">
              About Us
            </h2>
            <p className="text-gray-700 text-lg mb-2">
              Welcome to <span className="font-semibold">EquiSports</span> –
              your go-to platform for exploring and managing sports equipment
              and accessories!
            </p>
            <p className="text-gray-700 text-lg mb-2">
              At EquiSports, we are dedicated to creating an organized and
              accessible space where users can discover a wide range of sports
              products. Our platform focuses on providing a robust product
              listing system that allows users to:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg mb-2">
              <li>
                <span className="font-semibold">View:</span> Browse through our
                collection of sports gear and accessories with ease.
              </li>
              <li>
                <span className="font-semibold">Add:</span> Contribute new
                products to the catalog.
              </li>
              <li>
                <span className="font-semibold">Update:</span> Modify product
                details to keep the listings accurate and up-to-date.
              </li>
              <li>
                <span className="font-semibold">Delete:</span> Manage product
                entries efficiently for an optimized catalog.
              </li>
            </ul>
            <p className="text-gray-700 text-lg mb-6">
              While we currently focus on building a seamless product management
              experience, this is just the beginning of our journey. We’re
              committed to enhancing the platform to meet more of your needs in
              the future, including advanced features like e-commerce
              functionality and user account management.
            </p>
            <p className="text-gray-700 text-lg mb-2">
              We are dedicated to providing high-quality sports gear designed to
              enhance performance and comfort. Offering a wide range of durable
              and reliable equipment, we cater to athletes of all levels. Our
              mission is to support your fitness journey with top-notch products
              that meet your sporting needs.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
              <li>
                <span className="font-semibold">Authentic Products:</span>{" "}
                Sourced from trusted manufacturers.
              </li>
              <li>
                <span className="font-semibold">Quality Ensured:</span> Rigorous
                quality checks for every product.
              </li>
              <li>
                <span className="font-semibold">On-Time Delivery:</span> Your
                time matters to us.
              </li>
            </ul>
            <p className="text-gray-700 text-lg text-center">
              <span className="font-semibold">EquiSports</span> – Simplifying
              Sports Product Management.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
