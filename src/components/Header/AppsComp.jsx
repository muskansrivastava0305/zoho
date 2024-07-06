import React, { useEffect, useState } from "react";
import Sales_comp from "./Sales_comp";
import Marketing_comp from "./Marketing_comp";

function AppsComp() {
  const [sales, setSales] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [visibleComponent, setVisibleComponent] = useState(null);

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

//   useEffect(() => {
//     if (sales) setVisibleComponent("sales");
//     if (marketing) setVisibleComponent("marketing");
//   }, [sales, marketing]);

  const displayComponent = [
    {
        name: sales,
        component:<Sales_comp/>
    },
    {
        name:marketing,
        component:<Marketing_comp/>
    }
  ]


  return (
    <div className=" w-full py-8  justify-between  flex">
      <div className=" border-r border-r-[#8080804d] pl-2 pr-4 w-72 bg-white flex flex-col gap-1 items-start">
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

      <div className="transition-all px-5 duration-300 w-fit">
        {displayComponent.map((item)=>(
         <div
            className={`${item.name? "opacity-100": "opacity-0 pointer-events-none"}transition-opacity duration-500 ease-in-out transform`}>
            {item.name && item.component}
          </div>
        ))}
        {/* <div
          className={`${marketing ? "opacity-100": "opacity-0 pointer-events-none"}transition-opacity duration-500 ease-in-out transform`}>
          {marketing && <Marketing_comp />}
        </div> */}
      </div>
    </div>
  );
}

export default AppsComp;
