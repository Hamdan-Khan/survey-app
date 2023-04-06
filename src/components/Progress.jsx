import React from "react";

const Progress = ({ state, setFormState, status }) => {
  return (
    <div className="w-[85vw] sm:w-[65vw] md:w-[50vw] lg:w-[40vw] mx-auto mt-7">
      <div className="h-[16px] bg-green-100 rounded-full flex justify-between items-center">
        <div
          className={`h-7 w-7 rounded-[50%] font-semibold shadow-dark text-white ${
            state == "one" || state == "two" || state == "three"
              ? "bg-green-600"
              : "bg-green-500"
          } flex justify-center items-center z-10 cursor-pointer hover:bg-green-500 duration-200`}
          onClick={() => setFormState("one")}
        >
          1
        </div>
        <div
          className={`flex-1 ${
            state == "two" || state == "three" ? "bg-green-600" : ""
          } h-[16px] duration-300`}
        ></div>
        <div
          className={`h-7 w-7 rounded-[50%] font-semibold shadow-dark text-white ${
            state == "three" || state == "two" ? "bg-green-600" : "bg-[#74c774]"
          } flex justify-center items-center z-10 ${
            status == "second" || status == "third"
              ? "cursor-pointer"
              : "cursor-not-allowed"
          } hover:bg-green-500 duration-200`}
          onClick={() => setFormState("two")}
        >
          2
        </div>
        <div
          className={`flex-1 ${
            state == "three" ? "bg-green-600" : ""
          } h-[16px] duration-300`}
        ></div>
        <div
          className={`h-7 w-7 rounded-[50%] font-semibold shadow-dark text-white ${
            state == "three" ? "bg-green-600" : "bg-[#74c774]"
          } flex justify-center items-center z-10 ${
            status == "third" ? "cursor-pointer" : "cursor-not-allowed"
          } hover:bg-green-500 duration-200`}
          onClick={() => setFormState("three")}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default Progress;
