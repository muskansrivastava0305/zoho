import React from "react";
import Nav_Cards from "../utils/Nav_Cards";
import Nav_heading from "../utils/Nav_heading";
import Appscontainer from "./Appscontainer";

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
    <>
      <Nav_heading name="Sales" />
      <Appscontainer>
        {salesData.map((item) => (
          <Nav_Cards
            name={item.name}
            to={item.to}
            content={item.content}
            icon={item.icon}
          />
        ))}
      </Appscontainer>
    </>
  );
}

export default Sales_comp;
