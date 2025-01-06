import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cssB, whiteHover } from "../utility/utility";

const EquipmentHome = ({ equipment, equipments, home, theme }) => {
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
    brand,
  } = equipment;
  return (
    <div className="flex flex-wrap">
      <div
        className={`card ${
          theme == "light" ? "bg-base-100" : "bg-gray-400 text-white"
        }  shadow-xl flex-grow p-2 gap-3`}
      >
        <figure>
          <img src={image} alt={itemName} className="h-72 rounded-2xl" />
        </figure>
        <div className="card-body flex font-barlow">
          <Link to={`/equipments/${_id}`}>
            <h2 className="card-title text-2xl hover:underline">{itemName}</h2>
          </Link>

          <div className="flex items-center justify-between gap-2">
            <p
              className={`${
                stockStatus > 0 ? " text-green-500" : "text-red-500"
              } text-xl bg-gray-100 p-1 text-center rounded-xl`}
            >
              {stockStatus > 0 ? " In Stock" : "Out Of Stock"}
            </p>
            <p
              className={`text-xl p-1 text-center rounded-xl ${
                theme == "light" ? "bg-gray-100" : "bg-gray-900"
              }`}
            >
              {category}
            </p>
          </div>
          <p className="text-xl">{description}</p>
          <div
            className={`divider ${theme == "light" ? "" : "divider-neutral"}`}
          ></div>
          <p className="text-xl text-center text-red-600 font-bold">
            $ {price}{" "}
          </p>
          <div className="flex items-center justify-between gap-2 mx-auto">
            <Link to={`/equipments/${_id}`}>
              <button className={cssB + whiteHover + "w-full"}>
                <FaEye /> See More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentHome;
