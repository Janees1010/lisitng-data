"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ totalCount,  page, setPage }) => {
  const limit = 5;
  const btn = Math.ceil(totalCount / limit);

  const handlePreviousPage = () => {
    if (page != 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (page < btn) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex p-3 text-white justify-center gap-4">
      {btn > 1 && (
        <button
          onClick={handlePreviousPage}
          className="py-1 flex justify-center items-center px-3 rounded-md  bg-white text-amber-400"
        >
          <IoIosArrowBack />
        </button>
      )}{" "}
      <button className="py-1 px-3 rounded-md bg-white text-amber-400">
        {page}
      </button>
      {btn > 1 && (
        <button
          onClick={handleNextPage}
          className="py-1 px-3 rounded-md bg-white text-amber-400"
        >
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default Pagination;
