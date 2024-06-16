import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function AddTodo() {
  const [data, setData] = useState({
    todo: "",
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      todo: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); //leaern this
    const userTodo = {
      todo: data.todo,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/save", userTodo);
      console.log(res.data, res.status);
      setData({ todo: "" });
    } catch (error) {
      console.error("There was an error saving the todo!", error);
    }
  };
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className="w-8/12 h-3/5 border-gray-500 rounded-md border-[.5px] pt-8 pb-2 pr-4 pl-4 bg-gray-100 relative">
        <div className=" absolute text-2xl z-10 right-4 top-3">
          <Link to="/">
            <IoClose />
          </Link>
        </div>
        <form onSubmit={handleOnSubmit} className=" flex flex-col gap-6">
          <div className="flex justify-center">
            <input
              required
              className=" w-2/4 outline-none focus:border-blue-700 border-[2px] border-transparent text-lg p-1 pl-2 pr-2 rounded-lg text-wrap"
              type="text"
              value={data.todo}
              onChange={handleOnChange}
              placeholder="Type Todo here..."
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border-[2px] border-green-700 rounded-3xl p-0.5 pl-3 pr-3 bg-green-300 text-green-800 text-sm hover:bg-green-700 hover:text-white transition ease-in duration-150"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
