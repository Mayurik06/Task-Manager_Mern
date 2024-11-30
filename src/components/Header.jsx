import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";

function Header({ heading }) {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
      <GoTasklist size={26} className="lg:hidden"/>
          <span className="lg:text-3xl text-xl font-bold">{heading}</span>
        </div>
        <div>
          <CgProfile size={26} />
        </div>
      </div>
    </div>
  );
}

export default Header;
