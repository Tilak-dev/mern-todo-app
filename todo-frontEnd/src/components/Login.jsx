import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Login() {
  return (
    <div className=" w-screen h-screen bg-gray-200">
      <div className=" w-full h-full flex justify-center items-center">
        <div className=" flex flex-col gap-3 pt-3 pl-6 pr-6 rounded-xl border-gray-400 border-[.6px] h-2/3 w-1/3 bg-red-50">
          <div className=" mb-4 text-gray-900 text-2xl font-semibold font-mono">
            {" "}
            Dude Login here
          </div>
          <div className=" w-full">
            <input
              type="text"
              placeholder="username here"
              className="w-full focus:border-green-500 rounded-lg border-[1px] outline-none placeholder:font-mono  pl-3 p-1.5"
            />
          </div>
          <div className=" w-full">
            <input
              type="password"
              placeholder="password here"
              className="w-full focus:border-green-500 rounded-lg border-[1px] outline-none placeholder:font-mono  pl-3 p-1.5"
            />
          </div>
          <div className=" w-full flex justify-center mt-4">
            <button className=" bg-green-800 flex items-center justify-center rounded-lg p-1.5 w-1/2 text-white gap-2">
              Login <FaArrowRightLong />
            </button>
          </div>
          <div className="flex justify-center">
            <div className=" text-xs">
              Don't have account?{" "}
              <span className="text-blue-800 text-sm font-semibold underline cursor-pointer">
                Register
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
