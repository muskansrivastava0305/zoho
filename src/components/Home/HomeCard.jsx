import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ icon, content, name, to }) {
  return (
    <Link to={to} className=" mt-5 mb-10 flex gap-6 w-full">
      <div className=" pt-1 text-2xl text-blue-400">{icon}</div>
      <div>
        <div className=" text-2xl">{name}</div>
        <div className=" text-gray-600 text-sm flex ">
          <div >{content}</div>
          <div>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomeCard;
