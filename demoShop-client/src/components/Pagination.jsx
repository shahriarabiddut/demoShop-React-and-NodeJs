import React from "react";

const Pagination = ({currentIndex,setCurrentIndex,totalPages}) => {
  const handlePageChange = (page) => {
    setCurrentIndex(page); 
  };
//   console.log(currentIndex);
  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`px-4 py-2 rounded-md border 
          ${currentIndex === i 
            ? "bg-blue-500 text-white border-blue-500" 
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
      >
        {i}
      </button>
    );
  }

  return <div className="flex justify-center space-x-2 mt-4">{buttons}</div>;
};

export default Pagination;
