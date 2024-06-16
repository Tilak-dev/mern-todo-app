import React, { useEffect, useState } from "react";
import TaskbarItem from "./TaskbarItem";
import axios from "axios";

function TaskBar() {
  const [getData, setGetData] = useState([]);

  const getFetchedData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/get");
      console.log(res.data);
      if (res.data) {
        setGetData(res.data);
      } else {
        console.log("Invalid data structure.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchedData();
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <div className=" w-full flex justify-end">
        <div>
          Welcome back <span>ash</span>
        </div>
      </div>
      <div className=" w-full h-[320px] overflow-scroll overflow-x-hidden ">
        {getData.map((todoItem) => {
          return (
            <TaskbarItem
              key={todoItem._id}
              paramId={todoItem._id}
              todo={todoItem.todo}
              getFetchedData={getFetchedData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskBar;
