import React from "react";

const Progress = ({ state, setFormState, status }) => {
  return (
    <div className="w-[95%] mx-auto mt-7">
      <div className="h-[16px] bg-green-200 rounded-full flex justify-between items-center">
        <div
          className={`h-7 w-7 rounded-[50%] font-semibold shadow-dark text-white ${
            state == "one" ? "bg-green-500" : "bg-green-600"
          } flex justify-center items-center z-10 cursor-pointer hover:bg-green-500 duration-200`}
          onClick={() => setFormState("one")}
        >
          1
        </div>
        <div
          className={`flex-1 ${
            status == "second" || status == "third" ? "bg-green-600" : ""
          } h-[16px] duration-300`}
        ></div>
        <div
          className={`h-7 w-7 rounded-[50%] font-semibold shadow-dark text-white ${
            state == "two" ? "bg-[#74c774]" : "bg-green-600"
          } flex justify-center items-center z-10 ${
            status == "second" || status == "third"
              ? "cursor-pointer"
              : "cursor-not-allowed"
          } hover:bg-green-500 duration-200`}
          onClick={() => {
            status == "second" || status == "third" ? setFormState("two") : "";
          }}
        >
          2
        </div>
        <div
          className={`flex-1 ${
            status == "third" ? "bg-green-600" : ""
          } h-[16px] duration-300`}
        ></div>
        <div
          className={`h-7 w-7 rounded-[50%] font-semibold shadow-dark text-white ${
            state == "three" ? "bg-[#74c774]" : "bg-green-600"
          } flex justify-center items-center z-10 ${
            status == "third" ? "cursor-pointer" : "cursor-not-allowed"
          } hover:bg-green-500 duration-200`}
          onClick={() => {
            status == "third" ? setFormState("three") : "";
          }}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default Progress;
