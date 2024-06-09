import React from "react";
import DashboardTopbar from "./DashboardTopbar";
import TaskBar from "./TaskBar";

function Dashboard() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className="w-11/12 h-4/5 border-gray-500 rounded-md border-[.5px] pt-8 pb-2 pr-4 pl-4 bg-gray-100">
        <DashboardTopbar />
        <hr className=" border-gray-400 " />
        <TaskBar />
      </div>
    </div>
  );
}

export default Dashboard;
