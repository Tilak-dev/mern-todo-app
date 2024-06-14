import React from "react";
import { MdOutlineTaskAlt } from "react-icons/md";


function TaskbarItem({todo}) {
  return (
    <div className="border-[0.6px] rounded-lg p-2 border-gray-500 mt-2 flex flex-row justify-between">
      <div className=" text-xl w-[15%]  font-semibold flex items-center flex-row gap-2">
        <span>
          <MdOutlineTaskAlt />
        </span>
        <span className="">{todo}</span>
      </div>
      <div className=" text-xl  font-semibold flex items-center flex-row gap-2">
        <span>------progress-----</span>
      </div>
      <div className="font-semibold flex items-center flex-row gap-2">
      <button className=" border-[2px] border-green-700 rounded-3xl p-0.5 pl-3 pr-3 bg-green-300 text-green-800 text-sm hover:bg-green-700 hover:text-white transition ease-in duration-150">
          ADD NEW
        </button>
      <button className=" border-[2px] border-red-700 rounded-3xl p-0.5 pl-3 pr-3 bg-red-300 text-red-800 text-sm hover:bg-red-700 hover:text-white transition ease-in duration-150">
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TaskbarItem;
