import React, { useContext } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Footer = () => {
  const { showToast } = useContext(AuthContext);
  const handleSub = (e) => {
    e.preventDefault();
    const form = e.target;
    showToast("Thanks! We Will Contact You Soon!", "success");
    form.reset();
  };
  return (
    <div className="bg-orange-500">
      <section className="w-11/12 lg:w-9/12 md:w-10/12 mx-auto space-y-8 text-white py-10 px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
          <div className="logoAbout">
            <div className="flex gap-3">
              <Link className="text-3xl font-bold font-rancho" to={`/`}>
                EquiSports
              </Link>
            </div>
            <p className="text-gray-100 my-4">
              Location: av. Washington 165, NY CA <br />
              54003 <br />
              Phone: +31 85 964 47 25 <br />
              Email: info@EquiSports.com <br />
              Openings hours: 9.00 AM - 5.00 PM
            </p>
            <div className="flex gap-4 my-4 justify-center">
              <p>
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-red-200 rounded-full text-3xl" />
                </a>
              </p>
              <p>
                <a href="https://www.twitter.com/">
                  <FaXTwitter className="text-red-200 rounded-full text-3xl" />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-red-200 rounded-full text-3xl" />
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/">
                  <FaYoutube className="text-red-200 rounded-full text-3xl" />
                </a>
              </p>
            </div>
          </div>
          <div className="usefulLinks">
            <h5 className="text-xl font-bold mb-4">Useful Links</h5>
            <ul>
              <li className="mb-2">
                <Link to={`/`} className="text-gray-100">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to={`/pages/about`} className="text-gray-100">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to={`/pages/shop`} className="text-gray-100">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link to={`/pages/contact`} className="text-gray-100">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropAMessage">
            <h5 className="text-xl font-bold mb-4">Get Offers Newsetters</h5>
            <p className="text-gray-400 mb-4"></p>
            <form onSubmit={handleSub} method="POST">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md mb-2 text-black bg-[#1F1F1F]"
                required
              />
              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-4 rounded-md w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-black p-5 mx-auto ">
        <p className="text-center text-white">
          Copyright &copy;{new Date().getFullYear()} - All Rights Reserved by
          EquiSports Ltd. Developed By &nbsp;
          <a
            href="https://shahriarahbiddut.web.app/"
            className="text-buttonBG font-rancho text-xl"
          >
            Shahriar Ahmed Biddut
          </a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
