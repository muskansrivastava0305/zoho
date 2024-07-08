import React, { useState } from "react";
import FineDine_comp from "./fineDine_comp";
import QSR_comp from "./QSR_comp";

function AppsComp({ AppNavData }) {
  const [fineDine, setFineDine] = useState(true);
  const [QSR, setQsr] = useState(false);

//   const AppNavData = [
//     {
//       name: "Fine dine",
//     },
//     {
//       name: "QSR",
//     },
//     {
//       name: "Cafe",
//     },
//     {
//       name: "Food court",
//     },
//     {
//       name: "Cloud kitchen",
//     },
//     {
//       name: "Ice cream & desserts",
//     },
//     {
//       name: "Bakery",
//     },
//     {
//       name: "Bar & brewery",
//     },
//     {
//       name: "Pizzeria",
//     },
//     {
//       name: "Large chain",
//     },
//   ];


  function handleAppComponent(name) {
    if (name === "Fine dine") {
      setQsr(false);
      setFineDine(true);
    }
    if (name === "QSR") {
      setFineDine(false);
      setQsr(true);
    }
  }

  const displayComponent = [
    {
      name: fineDine,
      component: <FineDine_comp />,
    },
    {
      name: QSR,
      component: <QSR_comp />,
    },
  ];

  function handleProductDropdown() {
    setProduct(false);
  }

  return (
    <div className="w-full max-w-[1380px] my-0 mx-auto py-8 justify-between flex">
      <div className="border-r border-r-[#8080804d] pl-2 pr-4 w-80 bg-white flex flex-col gap-1 items-start">
        {AppNavData.map((item) => (
          <button
            onMouseEnter={() => handleAppComponent(item.name)}
            key={item.name}
            className="rounded-md px-1 text-gray-600 flex justify-between items-center text-sm w-full hover:bg-[#f8f9fb] py-1.5"
          >
            <div>{item.name}</div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </button>
        ))}
        <button className="flex gap-3 items-center bg-[#056cb8] px-3 py-3 text-white rounded-sm text-sm mt-5 uppercase">
          <div>Explore all products</div>{" "}
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>

      <div className="transition-all px-5 duration-300 w-fit">
        {displayComponent.map((item) => (
          <div
            className={`${
              item.name ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-500 ease-in-out transform bg-white`}
          >
            {item.name && item.component}
          </div>
        ))}
        <button
          onClick={handleProductDropdown}
          className="absolute right-2 mx-5 rounded-full top-2.5 shadow bg-white px-2.5 py-2 flex justify-center items-center"
        >
          <i className="text-gray-500 text-end fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default AppsComp;
