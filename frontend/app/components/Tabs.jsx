"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";



const Tabs = () => {
  const categories = [
    "Technology",
    "Health",
    "Finance",
    "Entertainment",
    "Travel",
  ];
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [page, setPage] = useState(1);
  
   const fetchData = async (category, page = 1) => {
    try {
      const { data } = await axios.get("http://localhost:4000/getData", {
        params: { category: category, page },
      });
      setData(data)
      return data
    } catch (error) {
      console.log(error.message);
    }
  };

 
  useEffect(() => {
     fetchData(selectedCategory,page);
  }, [selectedCategory,page]);
  return (
    <>
      <div className="max-w-[800px] rounded-md bg-amber-50 p-5 flex gap-3 justify-center flex-wrap">
        {categories
          ? categories.map((cat, i) => {
              return (
                <button
                  onClick={() =>{
                     setSelectedCategory(cat)
                     setPage(1)
                  }}
                  key={i}
                  className={`relative py-4 px-2 text-white cursor-pointer  shadow-md font-medium rounded-lg min-w-[120px]  transition-all duration-300 ${
                    selectedCategory === cat ? " bg-amber-500 font-semibold" : "bg-amber-300"
                  }`}                >
                  {cat}{" "}
                  <span className="absolute w-[20px] h-[20px] rounded-full bg-white text-red-500 shadow-md flex justify-center items-center p-3 right-[-5px] top-[-8px]">
                    {data ? data[cat] : "..."}
                  </span>
                </button>
              );
            })
          : ""}
      </div>
      <div className="bg-lime-50 p-5 min-h-[200px]  rounded-md flex gap-3 flex-wrap w-[700px]">
        {data && data.data.length
          ? data.data.map((e, i) => {
              return (
                <div
                  key={e._id}
                  className="bg-amber-300 min-w-[150px] max-h-[80px] text-white shadow-lg rounded-md py-2 px-4 "
                >
                  <h2 className="font-bold ">{e.name}</h2>
                  <p>{e.description}</p>
                </div>
              );
            })
          : ""}
      </div>
      <div className="w-[300px] rounded-md bg-amber-300">
        <Pagination
          page={page}
          setPage={setPage}
          totalCount={data ? data[selectedCategory] : ""}
        />
      </div>
    </>
  );
};

export default Tabs;
