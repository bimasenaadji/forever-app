import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <button
        onClick={handlePrev}
        disabled={currentPage <= 1} // Nonaktifkan jika di halaman pertama
        className="px-4 py-2 bg-desc  disabled:opacity-50 cursor-pointer"
      >
        Previous
      </button>

      <span className="font-normal">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage >= totalPages} // Nonaktifkan jika di halaman terakhir
        className="px-4 py-2 bg-black text-white disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
