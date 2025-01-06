import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SiLevelsdotfyi } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import Equipment from "../components/Equipment";
import Loading from "../components/Loading";
import PageSlogan from "../components/PageSlogan";
import Pagination from "../components/Pagination";
import { AuthContext } from "../provider/AuthProvider";
import { cssB, cssA, whiteHover } from "../utility/utility";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const UserEquipments = () => {
  const { showToast, user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  const [loader, setLoader] = useState(true);
  const [format, setFormat] = useState(0);
  const email = user.email;
  useEffect(() => {
    // Email By
    fetch("https://pha10-server.vercel.app/equipmentsUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setEquipments(data);
      })
      .catch((error) => {
        console.error(error);
      });
    //
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

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
  const equipmentsPerPage = 9;
  const totalPages = Math.ceil(equipments.length / equipmentsPerPage);
  const currentEquipentData = equipments.slice(
    (currentIndex - 1) * equipmentsPerPage,
    currentIndex * equipmentsPerPage
  );
  const handleDeleteHere = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pha10-server.vercel.app/equipments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
              });
              const remainingEquipment = equipments.filter(
                (eq) => eq._id != _id
              );
              setEquipments(remainingEquipment);
            } else {
              Swal.fire({
                title: "Error!",
                text: "There was something Wrong.",
                icon: "error",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto py-20 space-y-4">
      <Helmet>
        <title>My Equipments | EquiSports</title>
      </Helmet>
      <PageSlogan title={"My Equipments"} />

      <div className="flex flex-row items-center justify-end gap-3">
        <NavLink to={"/equipments/add"} className={cssA + whiteHover}>
          Add Equipments
        </NavLink>
        <select
          className="select select-bordered "
          onChange={(event) => {
            setFormat(parseInt(event.target.value, 10));
          }}
        >
          <option disabled defaultValue={"Table"}>
            Choose Format
          </option>
          <option value="0">Table</option>
          <option value="1">Card</option>
        </select>
        <div className={`flex p-2 rounded-2xl`}>
          <span className="inline-flex items-center justify-center gap-1">
            Sort By <SiLevelsdotfyi /> : &nbsp;
          </span>
          <select
            className="select select-bordered "
            onChange={(event) => {
              handleSort(parseInt(event.target.value, 10));
            }}
          >
            <option disabled defaultValue={"Default"}>
              Sort By Price
            </option>
            <option value="0">High To Low</option>
            <option value="1">Low To High</option>
          </select>
        </div>
      </div>
      <div>
        {loader ? (
          <Loading />
        ) : equipments.length === 0 ? (
          <p className="flex justify-center my-4 font-rancho text-5xl">
            No Data Found
          </p>
        ) : format == 0 ? (
          <div className="overflow-x-auto my-4 bg-orange-50">
            <table className="table table-zebra font-barlow text-xl">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentEquipentData.map((equipment) => (
                  <tr key={equipment._id}>
                    <td>{equipment.itemName}</td>
                    <td>{equipment.category}</td>
                    <td>{equipment.price}</td>
                    <td className="flex items-center gap-2 flex-wrap">
                      <Link to={`/equipments/update/${equipment._id}`}>
                        <button className={cssB + whiteHover}>
                          <FaPen /> Update
                        </button>
                      </Link>
                      <Link to={`/equipments/${equipment._id}`}>
                        <button className={cssB + whiteHover}>
                          <FaEye /> View
                        </button>
                      </Link>
                      <button
                        className={cssA + whiteHover}
                        onClick={() => {
                          handleDeleteHere(equipment._id);
                        }}
                      >
                        <FaTrash></FaTrash> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={"4"}>
                    <Pagination
                      key={equipmentsPerPage}
                      currentIndex={currentIndex}
                      setCurrentIndex={setCurrentIndex}
                      totalPages={totalPages}
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentEquipentData.map((equipment) => (
                <Equipment
                  key={equipment._id}
                  equipment={equipment}
                  setEquipments={setEquipments}
                  equipments={equipments}
                ></Equipment>
              ))}
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <Pagination
                key={equipmentsPerPage}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                totalPages={totalPages}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserEquipments;
