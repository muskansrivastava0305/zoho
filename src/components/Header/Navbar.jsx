import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AppsComp from "./AppsComp";
import SuitesComp from "./SuitesComp";

function Navbar() {
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [AppComp, setAppComp] = useState(true);
  const [SuitesCompData, setSuitesComp] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState("Apps");
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const navbarRef = useRef(null);
  const ref = useRef(null);

  const subNavData = [
    {
      name: "Products",
      subItem: [
        {
          name: "Apps",
        },
        {
          name: "Suites",
        },
        {
          name: "Zoho One",
        },

        {
          name: "Marketplace",
        },
      ],
    },
    {
      name: "Customer",
    },
    {
      name: "Company",
      subItem: [
        {
          name: "About",
        },
        {
          name: "Our story",
        },
        {
          name: "Press",
        },
        {
          name: "Events",
        },
        {
          name: "Careers",
        },
      ],
    },
    {
      name: "More",
      subItem: [
        {
          name: "Blog",
        },
        {
          name: "Community",
        },
        {
          name: "Support",
        },
        {
          name: "Contact us",
        },
      ],
    },
  ];

  function handleSubNavComponent(name) {
    switch (name) {
      case "Apps":
        setAppComp(true);
        setSuitesComp(false);
        break;
      case "Suites":
        setSuitesComp(true);
        setAppComp(false);
        break;
      default:
        setAppComp(false);
        setSuitesComp(false);
        break;
    }
    setActiveSubNav(name);
  }

  function handlecompanyDropdown() {
    setCompany(!company);
    setProduct(false);
  }

  function handleProductDropdown() {
    setProduct(!product);
    setCompany(false);
  }

  function handleNavbar() {
    setNavbar(!navbar);
  }

  function handleSubNavbar(name) {
    setDropdown(dropdown === name ? "" : name);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const displayComponent = [
    {
      name: AppComp,
      component: <AppsComp />,
    },
    {
      name: SuitesCompData,
      component: <SuitesComp />,
    },
  ];

  // close navar when click anywhere on the screen -----
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavbar(false);
        setProduct(false);
        setCompany(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div>
      {/* large screen view  */}

      <nav className="fixed bg-white w-full">
        <div className="border-b border-b-[#e7ebf0] p-4 flex justify-between items-center">
          <div className=" pl-0 sm:pl-10 gap-4 flex items-center">
            <div className="px-4 inline-block w-28">
              <img
                className="w-full h-full"
                src="https://qrdine.in/assets/img/logo.png"
                alt="Logo"
              />
            </div>
            <div className="hidden lg:inline-block">
              <ul className="font-light gap-8 flex">
                <li
                  onClick={handleProductDropdown}
                  className="cursor-pointer flex gap-2 items-center"
                >
                  <div>Products</div>
                  <i
                    className={`text-sm fa-solid ${
                      product ? "fa-chevron-down" : "fa-chevron-up"
                    }`}
                  ></i>
                </li>
                <li className="cursor-pointer">Customer</li>
                <li
                  onClick={handlecompanyDropdown}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <div>Company</div>
                  <i
                    className={`text-sm fa-solid ${
                      company ? "fa-chevron-down" : "fa-chevron-up"
                    }`}
                  ></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex gap-4">
            <button className="text-gray-700">Sign in</button>
            <button className="px-4 py-2 rounded-sm text-red-500 border border-red-500">
              Sign up
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className={`w-full absolute transition-all duration-300 ${
            product ? " opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative px-7 pt-4 bg-[#f8f9fb] flex gap-10">
            <ul className="text-gray-700 font-light flex gap-8 border-r pr-10 border-r-gray-400">
              {subNavData[0].subItem.map((subItem) => (
                <li
                  key={subItem.name}
                  className={`${
                    activeSubNav === subItem.name
                      ? "border-b-[#f60014]"
                      : "border-b-transparent"
                  } cursor-pointer border-b-2 pb-4 border-b-red-800`}
                  onClick={() => handleSubNavComponent(subItem.name)}
                >
                  {subItem.name}
                </li>
              ))}
            </ul>
            <div className="text-[#056cb8] flex gap-3 font-light uppercase">
              <div>Explore all products</div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <button
              onClick={handleProductDropdown}
              className="absolute right-2 mx-5 rounded-full top-2.5 shadow bg-white p-2 flex justify-center items-center"
            >
              <i className="text-gray-500 text-end fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="w-full transition-all duration-300 min-h-[70vh] bg-white">
            {/* {AppComp && <AppsComp />}
      {SuitesCompData && <SuitesComp />} */}
            {displayComponent.map((item) => (
              <div
                className={`${
                  item.name ? "opacity-100" : "opacity-0 pointer-events-none"
                }transition-opacity duration-500 ease-in-out transform`}
              >
                {item.name && item.component}
              </div>
            ))}
          </div>
        </div>
        <div
          ref={ref}
          className={`transition-all duration-150 ${
            company ? "translate-y-0" : "opacity-0 translate-y-4"
          } absolute left-[24rem] top-20 w-60  rounded-md px-6 py-2 bg-white`}
        >
          <div>
            <ul>
              <li className="pb-3">About us</li>
              <li className="pb-3">Careers</li>
              <li className="pb-3">Press</li>
              <li className="pb-3">Blog</li>
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile and tablet view */}
      <nav className=" fixed lg:hidden bottom-0 left-0 w-full">
        <div className=" flex">
          <button
            onClick={handleNavbar}
            className=" py-4 px-5 text-xl bg-black text-white"
          >
            {navbar ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </button>
          <div
            className={`${
              isScrolled ? "bg-[#f60014] text-white" : "bg-white text-[#f60014]"
            } transition-all duration-500 flex justify-center items-center font-semibold w-full`}
          >
            <button className=" uppercase">Sign up for free</button>
          </div>
        </div>
        <div
          className={`${
            navbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }  duration-300 border border-gray-200 absolute bottom-16 rounded-md bg-white w-80 max-h-[70vh] overflow-y-scroll px-5 py-4 left-1`}
        >
          <ul
            ref={navbarRef}
            className=" border-b border-b-gray-300 border-dashed pb-5"
          >
            {subNavData.map((item) => (
              <li
                className=" py-2 font-light text-gray-900"
                onClick={() => handleSubNavbar(item.name)}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <div>{item.name}</div>
                  {item.subItem && (
                    <div>
                      <i
                        className={`${
                          dropdown === item.name ? "rotate-180" : "rotate-0"
                        } transition-all duration-700  fa-solid fa-caret-down`}
                      ></i>
                    </div>
                  )}
                </div>
                {item.subItem && (
                  <div
                    className={`transition-all duration-700 overflow-hidden ${
                      dropdown === item.name ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {item.subItem.map((subItem) => (
                      <ul className=" py-2 pl-3">
                        <li>{subItem.name}</li>
                      </ul>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="flex py-1 flex-col justify-start items-start">
            <button className=" py-2 text-red-500 font-semibold">
              Sign In
            </button>
            <button className="font-light text-gray-700">
              All QRDine-In Products
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
