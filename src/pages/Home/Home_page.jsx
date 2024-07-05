import React from "react";
import { HomeCard, Nav_Cards } from "../../components";

function Home_page() {
  const featuredApps = [
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
  ];
  return (
    <div>
      <div className=" px-5 sm:px-0 relative z-[-1] flex lg:flex-row gap-12 lg:gap-0 flex-col items-center lg:items-start justify-evenly flex-wrap pt-40 pb-20 bg-[#f8f9fb]">
        <div className=" w-full text-center lg:text-start  lg:w-[35%] pr-0 pl-0 sm:pr-14 sm:pl-14 lg:pr-14">
          <div>
            <div className=" text-5xl text-black pb-8">
              Your life's work, powered by our life's work
            </div>
            <div className=" text-[22px] mt-5 mb-10 font-light">
              A unique and powerful software suite to transform the way you
              work. Designed for businesses of all sizes, built by a company
              that values your privacy.
            </div>
            <div className=" flex justify-center lg:justify-start">
              <button className=" flex justify-between gap-10 bg-[#d90000] rounded-sm text-white p-4">
                <div> GET STARTED FOR FREE</div>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </button>
            </div>
            <div className=" w-full lg:w-[70%] bottom-0 left-24 lg:absolute z-[-1]">
              <img
                src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-homev2-banner-india-3.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-[30rem] lg:w-96 bg-white rounded-md border px-8 py-5 border-gray-200">
          <div className="">
            <div className=" uppercase text-gray-700">Featured apps</div>
            <div className=" border-b border-b-gray-300">
              <div>
                {featuredApps.map((item) => (
                  <HomeCard
                    icon={item.icon}
                    content={item.content}
                    name={item.name}
                    to={item.to}
                  />
                ))}
              </div>
            </div>
            <div className=" flex justify-between text-blue-400  pt-6">
              <button className=" uppercase font-semibold text-blue-500">
                {" "}
                Exploree all products
              </button>
              <div>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-12 lg:mb-0 py-16 lg:py-32 flex px-4 justify-evenly lg:flex-row flex-col items-center lg:items-start  w-full bg-yellow-400">
        <div className=" flex gap-6 flex-col sm:flex-row w-full  lg:w-[40rem] border-b lg:border-r border-b-[#d0b31c] lg:border-b-0 pb-20 lg:pb-0 lg:border-r-[#d0b31c] border-dashed">
          <div className=" w-40 sm:w-96">
            <img src="https://qrdine.in/assets/img/logo.png" alt="" />
          </div>
          <div>
            <div className="">
              <div>All-in-one suite</div>
              <div className=" text-4xl">QRDine-In</div>
              <div>The operating system for business</div>
            </div>
            <div className=" w-full pb-9 py-6">
              Run your entire business on Zoho with our unified cloud software,
              designed to help you break down silos between departments and
              increase organizational efficiency.
            </div>
            <div className=" bg-red-800 p-3 rounded-sm w-fit text-white">
              <button className=" flex justify-between gap-6 uppercase">
                <div>TRY QRDINE</div>
                <div>
                  {" "}
                  <i className=" text-sm fa-solid fa-chevron-right"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" pt-16 lg:pt-0 w-full sm:w-80">
          <div className=" bg-black w-fit text-white py-3 px-4 rounded-full">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div className=" py-5 text-2xl font-thin">
            "You can be a startup, mid-sized company, or an enterprise—Zoho One
            is a boon for all."
          </div>
          <div className=" flex items-center gap-3">
            <div className=" w-24">
                <img src="" alt="" />
            </div>
            <div>
              <div>Kajal Shrivastava</div>
              <div className=" text-gray-800 font-light">CEO , kandatechnology.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_page;
