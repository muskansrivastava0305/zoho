import React from "react";
import Nav_heading from "../utils/Nav_heading";
import Nav_Cards from "../utils/Nav_Cards";

function Marketing_comp() {
    const marketingCompData =[
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
    ]
  return (
    <div className=" pb-[5%] bg-white">
      <Nav_heading name="Marketing" />
      <div className=" flex flex-wrap">
        {marketingCompData.map((item) => (
          <Nav_Cards
            name={item.name}
            to={item.to}
            content={item.content}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Marketing_comp;
