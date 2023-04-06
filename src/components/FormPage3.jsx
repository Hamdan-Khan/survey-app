import React, { useState } from "react";
import useStore from "../store/store";
import { shallow } from "zustand/shallow";

const FormPage3 = () => {
  const setFormState = useStore((state) => state.setFormState);
  const setFormStatus = useStore((state) => state.setFormStatus);

  const [
    challenge,
    benefits,
    drawbacks,
    advice,
    setChallenge,
    setBenefits,
    setDrawbacks,
    setAdvice,
    hours,
    setHours,
  ] = useStore(
    (state) => [
      state.challenge,
      state.benefits,
      state.drawbacks,
      state.advice,
      state.setChallenge,
      state.setBenefits,
      state.setDrawbacks,
      state.setAdvice,
      state.hours,
      state.setHours,
    ],
    shallow
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (!benefits || !challenge || !drawbacks || !advice) {
      return alert("Please fill all the compuslory fields");
    } else {
      hours >= 0 && hours < 10
        ? setHours("")
        : hours >= 10 && hours < 30
        ? setHours("Less than 1 hour")
        : hours >= 30 && hours < 50
        ? setHours("1-3 hours")
        : hours >= 50 && hours < 70
        ? setHours("3-6 hours")
        : hours >= 70 && hours < 90
        ? setHours("6-9 hours")
        : hours >= 90 && hours <= 100
        ? setHours("More than 9 hours")
        : "";
      setFormState("done");
      setFormStatus("done");
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col items-start justify-center gap-2 p-2 px-3">
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="challenge">
            What challenges have you faced as a freelancer in Pakistan?
          </label>
          <textarea
            className="border border-zinc-300 rounded-lg focus:outline-none px-2 py-1"
            name="challenge"
            maxLength={"1500"}
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="benefits">
            What are the biggest benefits of freelancing in Pakistan?
          </label>
          <textarea
            className="border border-zinc-300 rounded-lg focus:outline-none px-2 py-1"
            name="benefits"
            maxLength={"1500"}
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="drawbacks">
            What are the drawbacks of freelancing in your opinion?
          </label>
          <textarea
            className="border border-zinc-300 rounded-lg focus:outline-none px-2 py-1"
            name="drawbacks"
            maxLength={"1500"}
            value={drawbacks}
            onChange={(e) => setDrawbacks(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="advice">
            An advice that you would give to your past self when you started
            freelancing?
          </label>
          <textarea
            className="border border-zinc-300 rounded-lg focus:outline-none px-2 py-1"
            name="advice"
            maxLength={"1500"}
            value={advice}
            onChange={(e) => setAdvice(e.target.value)}
          />
        </div>
        <button className="mt-3" onClick={submitHandler}>
          Mark as complete
        </button>
      </form>
    </div>
  );
};

export default FormPage3;
