import React from "react";

function DashboardTopbar() {
  return (
    <div className="flex flex-row mb-7 justify-between">
      <div className=" font-mono text-3xl font-semibold "> TODO Tick List</div>
      <div className="  flex flex-row gap-2">
        <button className=" border-[2px] border-green-700 rounded-3xl p-0.5 pl-3 pr-3 bg-green-300 text-green-800 text-sm hover:bg-green-700 hover:text-white transition ease-in duration-150">
          ADD NEW
        </button>
        <button
          className=" border-[2px] border-red-700 rounded-3xl p-0.5 pl-3 pr-3 bg-red-700 text-white text-sm hover:bg-red-900 
      hover:border-red-900
      hover:text-white transition ease-in duration-150"
        >
          SIGN OUT
        </button>
      </div>
    </div>
  );
}

export default DashboardTopbar;
