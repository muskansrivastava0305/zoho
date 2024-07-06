import React from "react";
import Nav_Cards from "../utils/Nav_Cards";
import Nav_heading from "../utils/Nav_heading";

function Sales_comp() {
    const salesData = [
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
        {
          name: "crm",
          to: "/",
          content: "Comprehensive CRM platform for customer-facing teams.",
          icon: <i className="fas fa-users"></i>,
        },
      ];
  return (
    <div className=" pb-[5%] bg-white">
      <Nav_heading name="Sales" />
      <div className=" flex flex-wrap">
        {salesData.map((item) => (
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

export default Sales_comp;
