import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { NavLink, useLoaderData } from "react-router-dom";
import EquipmentHome from "../components/EquipmentHome";
import PageSlogan from "../components/PageSlogan";
import Pagination from "../components/Pagination";
import { AuthContext } from "../provider/AuthProvider";
import { activeCss, cssA, whiteHover } from "../utility/utility";

const AllEquipments = () => {
  const { showToast, user, loading } = useContext(AuthContext);
  const loadedEquipments = useLoaderData();
  const [equipments, setEquipments] = useState(loadedEquipments);
  const handleSort = (type) => {
    const sortedList = [...equipments].sort((a, b) =>
      type === 0 ? b.price - a.price : a.price - b.price
    );
    setEquipments(sortedList);
    showToast(
      type === 0
        ? "Sorted By High To Low Price!"
        : "Sorted By Low To High Price!",
      "info"
    );
  };

  // Pagination
  const [currentIndex, setCurrentIndex] = useState(1);
  const equipmentsPerPage = 12;
  const totalPages = Math.ceil(equipments.length / equipmentsPerPage);
  const currentEquipentData = equipments.slice(
    (currentIndex - 1) * equipmentsPerPage,
    currentIndex * equipmentsPerPage
  );
  // From Array
  // const handlePageChange = (page) => {
  //   setCurrentIndex(page);
  // };
  return (
    <div className="w-11/12 mx-auto py-20 space-y-4">
      <Helmet>
        <title>All Sports Equipments | EquiSports</title>
      </Helmet>
      <PageSlogan title={"All Sports Equipments"} />

      <div className="flex flex-row items-center justify-end gap-3">
        {/* <button className={activeCss + whiteHover} onClick={() => handleSort()}>
          Sort By Price <SiLevelsdotfyi />
        </button> */}
        <select
          className="select select-bordered "
          onChange={(event) => {
            handleSort(parseInt(event.target.value, 10));
          }}
        >
          <option disabled selected>
            Sort By Price
          </option>
          <option value="0">High To Low</option>
          <option value="1">Low To High</option>
        </select>
        {user != null && loading == false && (
          <>
            <NavLink
              to={"/equipments/myEquipments"}
              className={cssA + whiteHover}
            >
              My Equipments
            </NavLink>
          </>
        )}
      </div>
      <>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {currentEquipentData.map((equipment) => (
            <EquipmentHome
              key={equipment._id}
              equipment={equipment}
              equipments={equipments}
            ></EquipmentHome>
          ))}
        </div>
        <Pagination
          key={equipmentsPerPage}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          totalPages={totalPages}
        />
      </>
    </div>
  );
};

export default AllEquipments;
