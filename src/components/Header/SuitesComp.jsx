import React from 'react'
import Nav_Cards from '../utils/Nav_Cards'

function SuitesComp() {
    const SuitesData = [
        {
            name: "CRM Plus",
            to: "/",
            content: "Comprehensive CRM platform for customer-facing teams.",
            icon: <i className="fas fa-users"></i>,
            bg:'bg-green-50'
          },
          {
            name: "CRM Plus",
            to: "/",
            content: "Comprehensive CRM platform for customer-facing teams.",
            icon: <i className="fas fa-users"></i>,
            bg:'bg-orange-50'
          },{
            name: "CRM Plus",
            to: "/",
            content: "Comprehensive CRM platform for customer-facing teams.",
            icon: <i className="fas fa-users"></i>,
            bg:'bg-pink-50'
          },{
            name: "CRM Plus",
            to: "/",
            content: "Comprehensive CRM platform for customer-facing teams.",
            icon: <i className="fas fa-users"></i>,
            bg:'bg-violet-50'
          },{
            name: "CRM Plus",
            to: "/",
            content: "Comprehensive CRM platform for customer-facing teams.",
            icon: <i className="fas fa-users"></i>,
            bg:'bg-blue-50'
          },
    ]
  return (
    <div className=' p-8 w-full bg-white'>
        <div className=' flex flex-wrap'>
           {SuitesData.map((item)=>(
             <Nav_Cards
             className={item.bg}
             icon={item.icon}
             name={item.name}
             content={item.content}
             to={item.to}
             />
           ))}
        </div>
    </div>
  )
}

export default SuitesComp