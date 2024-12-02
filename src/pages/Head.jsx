import React from "react";
import { GoTasklist } from "react-icons/go";

function Head({children}) {
  return (
  <div className="flex flex-col">
      <div className="p-4 h-[30px]">
      <div className="flex items-center gap-4">
        <GoTasklist size={26} />
        <span className="text-xl font-bold">TaskIT</span>
      </div>
    </div>

    <div className="flex-1">
        <main>
            {children}
        </main>
    </div>
  </div>
  );
}

export default Head;
