import React from 'react'

function Footer() {
  return (
    <div className=' '>
    <div className="flex sm:gap-2 md:gap-2 gap-5 justify-center ">


      <div className="flex flex-col items-start gap-3 md:gap-2 sm:gap-1 sm:mr-3 md:mr-6 mr-10">
        <h1 className=" font-bold md:text-sm sm:text-xs text-lg">POS</h1>
        <ul className=" ">
          <li>Billing</li>
          <li>Inventory</li>
          <li>Reporting</li>
          <li>Online Ordering</li>
          <li>CRM</li>
          <li>Menu</li>
        </ul>
        <button className="bg-black text-white border rounded-md md:p-0.5 p-2 md:text-xs text-sm">Take a Free demo</button>
      </div>


      <div className="flex flex-col items-start gap-3 md:gap-2 mr-10 sm:mr-3 md:mr-6">
        <h1 className=" font-bold  md:text-sm text-lg">Add-ons</h1>
        <ul className="">
          <li>Marketplace</li>
          <li>Payrol</li>
          <li>Invoice</li>
          <li>Tasks</li>
          <li>Marketing Hub</li>
          <li>Integrations</li>
        </ul>
      </div>


      <div className="flex flex-col items-start md:gap-2 gap-3 mr-10 md:mr-10 sm:mr-3">
        <h1 className=" font-bold md:text-sm text-lg">Outlet types</h1>
        <ul className="">
          <li>Fine Dine</li>
          <li>QSR</li>
          <li>Cafe</li>
          <li>Food Court</li>
          <li>Cloud Kitechen</li>
          <li>Ice Cream</li>
          <li>Bakery</li>
          <li>Bar & Brewery</li>
          <li>Pizzeria</li>
          <li>Large Chains</li>
        </ul>
      </div>


      <div className="flex flex-col items-start md:gap-2 gap-3 mr-10 md:mr-6 sm:mr-3">
        <h1 className=" font-bold md:text-sm text-lg">Resources</h1>
        <ul className=" ">
          <li>Pricing</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Support</li>
          <li>About Us</li>
          <li>Reseller</li>
          <li>Magazine</li>
        </ul>
      </div>


      <div className="flex flex-col items-start md:gap-2 gap-3 md:mr-6 sm:mr-3 mr-10">
        <h1 className=" font-bold md:text-sm text-lg">Prayosha Food Services Private Limited</h1>
        <div>3rd Floor, Tower-A, Gopal Palace, Nehrunagar, Ambawadi, Ahmedabad, Gujarat - 380015</div>
      </div>
    </div>


    <div className=" flex items-center md:gap-5 gap-10 justify-center md:pt-5 pt-20">
      <div className="h-16 w-32 ">
        <img src="logo.png" alt="" />
      </div>

      <div className="flex sm:gap-1 md:gap-2 gap-5 sm:h-3 md:h-5 h-10 ">
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-youtube"></i>
      </div>
      <div className="flex md:gap-5 gap-10">
        <div className="flex gap-2">
        <i class="fa-solid fa-phone"></i>
        <p>9000000000</p>
        </div >
       
        <div className="flex gap-2">
        <i class="fa-regular fa-envelope"></i>
        <p>inquiry@qurdin.com</p>
        </div>
      </div>
    </div>

    <div>


    </div>
  </div>

  )
}

export default Footer