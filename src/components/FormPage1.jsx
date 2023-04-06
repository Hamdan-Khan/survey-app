import React from "react";
import useStore from "../store/store";
import { shallow } from "zustand/shallow";

const FormPage1 = () => {
  const setFormState = useStore((state) => state.setFormState);
  const setFormStatus = useStore((state) => state.setFormStatus);

  const [
    work,
    setWork,
    hours,
    setHours,
    source,
    setSource,
    platform,
    setPlatform,
  ] = useStore(
    (state) => [
      state.work,
      state.setWork,
      state.hours,
      state.setHours,
      state.source,
      state.setSource,
      state.platform,
      state.setPlatform,
    ],
    shallow
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (!work || !hours || !source || !platform) {
      return alert("Please fill all the compuslory fields");
    } else {
      setFormState("two");
      setFormStatus("second");
    }
  };
  return (
    <div className="flex justify-center">
      <form className="flex flex-col items-start justify-center gap-2 p-2 px-3">
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="work">
            What type of freelance work do you specialize in?(niche)
          </label>
          <input
            type="text"
            name="work"
            maxLength={"40"}
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="platform">
            Where did you learn this skill from?
          </label>
          <select
            className="px-3 py-1.5"
            id="platform"
            name="platform"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          >
            <option value="">Select</option>
            <option value="YouTube">YouTube</option>
            <option value="DigiSkills">DigiSkills</option>
            <option value="Coursera">Coursera</option>
            <option value="Udemy">Udemy</option>
            <option value="Official Documentation">
              Official Documentation
            </option>
            <option value="Other..">Other..</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="hours">
            How many hours do you typically devote to freelancing in a day?
          </label>
          <div className="flex w-full gap-2 py-1">
            <input
              type="range"
              name="hours"
              id="hours-input"
              className="focus:shadow-none px-none flex-1"
              min={0}
              max={100}
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />

            <span
              id="tooltip"
              className="bg-zinc-700 text-white px-1 w-[130px] text-center rounded-[10px] relative h-[26px] font-semibold"
            >
              {hours >= 0 && hours < 10
                ? "Select"
                : hours >= 10 && hours < 30
                ? "<1 hour 😊"
                : hours >= 30 && hours < 50
                ? "1-3 hours 😁"
                : hours >= 50 && hours < 70
                ? "3-6 hours 😎"
                : hours >= 70 && hours < 90
                ? "6-9 hours 😳"
                : hours >= 90 && hours <= 100
                ? ">9 hours 🤯"
                : ""}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="platform">
            Where do you find freelnace work?
          </label>
          <select
            className="px-3 py-1.5"
            id="source"
            name="source"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Fiverr/Upwork">Fiverr/Upwork</option>
            <option value="Other platforms(Guru, Freelancer, etc.)">
              Other platforms(Guru, Freelancer, etc.)
            </option>
            <option value="Social Media platforms(Fb, YT, Instagram, etc.)">
              Social Media platforms(Fb, YT, Instagram, etc.)
            </option>
            <option value="Personal Network(Personal Website, blogging, etc.)">
              Personal Network(Personal Website, blogging, etc.)
            </option>
            <option value="Local Market">Local Market</option>
            <option value="Other..">Other..</option>
          </select>
        </div>
        <button className="mt-3" onClick={submitHandler}>
          Next
        </button>
      </form>
    </div>
  );
};

export default FormPage1;
