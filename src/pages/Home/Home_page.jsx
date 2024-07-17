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
      
      <div className=" px-5 sm:px-0 relative z-[-1] flex lg:flex-row gap-12 lg:gap-0 flex-col items-center lg:items-start justify-evenly flex-wrap pt-[30%] sm:pt-40 pb-20 bg-[#f8f9fb]">
        <div className=" w-full text-center lg:text-start  lg:w-[35%] px-2 xl:px-14">
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
      <div className=" lg:mb-0 py-16 lg:py-32 flex px-4 justify-evenly lg:flex-row flex-col items-center lg:items-start  w-full bg-yellow-400">
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
            <div className=" w-16 text-white flex justify-center items-center bg-black h-16 rounded-full">
              {/* <img src="" alt="" /> */}
              img
            </div>
            <div>
              <div>Kajal Shrivastawa</div>
              <div className=" text-gray-800 font-light">
                CEO , kandatechnology.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* restaurant showcase banner */}
      <div className=" bg-[#f8f9fb] text-center">
        <div className=" py-16 sm:py-28 mx-4 sm:mx-24 md:mx-44 flex gap-4 flex-col items-center">
          <div className=" relative uppercase font-light text-gray-800 text-sm inline-block">
            Brand That trust us
            <div className=" border-b top-3 right-1/2 border-b-red-800 absolute"></div>
          </div>
          <div className=" w-full overflow-hidden flex justify-center items-center">
            <div className="scroll-content flex">
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center">
            <div className=" hover:scale-105 transition-all ease-in-out duration-100 cursor-pointer flex gap-2 items-center uppercase font-semibold text-blue-400">
              <p>Customer stories</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>

      {/* pivacy and policy  */}
      <div class = ' flex flex-col justify-center  items-center gap-4 sm:gap-5 bg-[#e9e9e999]rounded-md p-10 sm:p-20 md:p-32 w-full '>

      <i class="fa-solid fa-shield-halved  text-7xl "></i>
      <h1 class = ' text-2xl font-semibold sm:text-3xl md:text-4xl text-center'>Your privacy is our responsibility</h1>
      <p class = ' text:md sm:text-lg md:text-xl w-full md:w-[45rem] text-center text-[#424242] '  >We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly 
        do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.</p>


      <button className=' flex justify-center text-center border border-blue-700 rounded-sm text-blue-700 p-2 md:p-3'>
        <i class="fa-brands fa-square-youtube text-red-700 pr-5 pt-1 "> </i>
        <div className=' text-sm md:text-lg'>
          Watch Video
        </div>
      </button>

    </div>

    {/* free demo form */}
    <div className=' flex justify-center w-full bg-white py-14 px-6 '>
      <div className=' flex flex-col-reverse justify-center items-center md:flex-row gap-16 w-[60rem] '>
        <form className=' w-full' >
         <div className=" mb-5">
         <h1 className='text-2xl mb-1 font-semibold sm:text-3xl md:text-4xl '>Schedule a free demo</h1>
         <p className=' text-[15px] sm:text-[17px] text-gray-700 '>Get in touch with our team to clarify your queries</p>
         </div>
          <div className=''>
          <h4 className=" text-[15px] ml-1">Name</h4><input type="text" className='bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full '  />
          </div>

         <div className=" flex sm:flex-row flex-col justify-between items-center gap-3 mt-4">
         <div className='inline-block w-full sm:w-1/2'>
          <h4 className=" text-[15px]  ml-1">Phone Number</h4><input type='number'  className='bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full ' />
          </div>

          <div className='inline-block w-full sm:w-1/2' >
          <h4 className=" text-[15px]  ml-1" >Email</h4><input type='email' className='bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full ' />
          </div>
         </div>

          <div className='mt-4'>
          <h4 className=" text-[15px]  ml-1">City</h4><input type='text' className='bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full '/>
          </div>
         <div className='mt-4'>
          <h4 className=" text-[15px]  ml-1" >Restaurant Name</h4><input type='text'className='bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full ' />
         </div>

        <div className=' flex justify-end items-center w-full mt-4'>
        <button className='  border bg-red-700 rounded-lg text-whitem px-4 py-3 font-semibold text-white'>Submit
        </button>
        </div>
        </form>
        <div className=' w-[75%] sm:w-2/4'>
          <img src='https://d28ewddc5mocr5.cloudfront.net/images/scheduale-form_md.webp ' className=' w-full h-full' />
        </div>
      </div>


    </div>

    </div>
  );
}

export default Home_page;
