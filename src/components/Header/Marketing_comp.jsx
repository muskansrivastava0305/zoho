import React from "react";
import Nav_heading from "../utils/Nav_heading";
import Nav_Cards from "../utils/Nav_Cards";
import Appscontainer from "./Appscontainer";

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
    <>
      <Nav_heading name="Marketing" />
      <Appscontainer>
        {marketingCompData.map((item) => (
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

export default Marketing_comp;
