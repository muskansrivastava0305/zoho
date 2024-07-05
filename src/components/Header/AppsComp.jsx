import React, { useState } from 'react'
import Sales_comp from './Sales_comp'
import Marketing_comp from './Marketing_comp'

function AppsComp() {
    const [sales, setSales] = useState(true);
    const [marketing, setMarketing] = useState(false);

    const AppNavData = [
        {
          name: "Sales",
        },
        {
          name: "Marketing",
        },
        {
          name: "Commerce and POS",
        },
        {
          name: "Service",
        },
        {
          name: "Finance",
        },
        {
          name: "Email and collaborattion",
        },
        {
          name: "Human Resources",
        },
        {
          name: "Legal",
        },
      ];

    function handleAppComponent(name) {
        if (name === "Sales") {
          setMarketing(false);
          setSales(true);
        }
        if (name === "Marketing") {
          setSales(false);
          setMarketing(true);
        }
      }
    
  return (
    <div className=" w-full py-8  justify-between  flex">
    <div className=" border-r border-r-[#8080804d] pl-2 pr-4 w-80 bg-white flex flex-col gap-1 items-start">
      {AppNavData.map((item) => (
        <button
          onMouseEnter={() => handleAppComponent(item.name)}
          key={item.name}
          className=" rounded-md px-1 text-gray-600 flex justify-between items-center text-sm w-full hover:bg-[#f8f9fb] py-1.5"
        >
          <div>{item.name}</div>
          <div>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </button>
      ))}
      <button className=" flex gap-3 items-center bg-[#056cb8] px-3 py-3 text-white rounded-sm text-sm mt-5 uppercase">
        <div>Explore all products</div>{" "}
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>

    <div className=' w-fit'>
    {sales && <Sales_comp />}
    {marketing && <Marketing_comp />}
    </div>
  </div>
  )
}

export default AppsComp