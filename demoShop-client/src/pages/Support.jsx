import React from "react";
import support from "../assets/photo/support.png";
import { Helmet } from "react-helmet-async";

const Support = () => {
  return (
    <>
      <Helmet>
        <title> Support | EquiSports</title>
      </Helmet>
      <div className=" min-h-screen py-10 md:py-20 gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto w-11/12 ">
        <div className="col-span-1 flex items-center">
          <img src={support} alt="" />
        </div>

        <div className="px-2 flex flex-col gap-4 font-barlow col-span-1 md:col-span-2">
          <h1 className="lg:text-left text-center text-3xl font-semibold font-barlow">
            Support
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Need assistance? At{" "}
            <span className="font-semibold">EquiSports</span>, we’re here to
            help you with any questions or issues you may encounter while using
            our platform. Whether it's about viewing, adding, updating, or
            deleting products, our team is ready to provide support.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="collapse-group space-y-4">
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow bg-white border border-gray-200 rounded-lg"
                >
                  <div className="collapse-title text-lg font-semibold text-gray-800">
                    How can I add a product to the catalog?
                  </div>
                  <div className="collapse-content text-gray-700 text-base">
                    <p>
                      To add a product, navigate to the My Equipments &gt; "Add
                      Equipments" section, fill in the required details, and
                      click on the "Submit" button.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow bg-white border border-gray-200 rounded-lg"
                >
                  <div className="collapse-title text-lg font-semibold text-gray-800">
                    Can I update product details after adding them?
                  </div>
                  <div className="collapse-content text-gray-700 text-base">
                    <p>
                      Yes, you can update product details from My Equipments
                      page by selecting the product, editing the fields, and
                      saving the changes.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow bg-white border border-gray-200 rounded-lg"
                >
                  <div className="collapse-title text-lg font-semibold text-gray-800">
                    What should I do if I encounter an error?
                  </div>
                  <div className="collapse-content text-gray-700 text-base">
                    <p>
                      If you encounter an error, contact our support team
                      through the "Contact Us" page or email us at{" "}
                      <a
                        href="mailto:support@equisports.com"
                        className="text-blue-600 hover:underline"
                      >
                        support@equisports.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Support Hours
              </h2>
              <p className="text-gray-700 text-lg">
                Our support team is available during the following hours:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Monday to Friday: 9:00 AM – 6:00 PM (EST)</li>
                <li>Saturday: 10:00 AM – 4:00 PM (EST)</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
