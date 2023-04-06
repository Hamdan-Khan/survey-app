import React, { useEffect, useState } from "react";
import useStore from "../store/store";
import { shallow } from "zustand/shallow";

const Completion = () => {
  const [
    work,
    source,
    hours,
    platform,
    reliable,
    method,
    osource,
    satisf,
    advice,
    challenge,
    benefits,
    drawbacks,
  ] = useStore(
    (state) => [
      state.work,
      state.source,
      state.hours,
      state.platform,
      state.reliable,
      state.method,
      state.osource,
      state.satisf,
      state.advice,
      state.challenge,
      state.benefits,
      state.drawbacks,
    ],
    shallow
  );
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        ques: "What type of freelance work do you specialize in?(niche)",
        res: work,
      },
      {
        ques: "Where did you learn this skill from?",
        res: source,
      },
      {
        ques: "How many hours do you typically devote to freelancing in a day?",
        res: hours,
      },
      {
        ques: "Where do you find freelnace work?",
        res: platform,
      },
      {
        ques: "Do you think freelancing is a reliable source of income?",
        res: reliable,
      },
      {
        ques: "What is your payment method?",
        res: method,
      },
      {
        ques: "Do you have any other source of income?",
        res: osource,
      },
      {
        ques: "Are you satisifed with your current source of income?",
        res: satisf,
      },
      {
        ques: "What challenges have you faced as a freelancer in Pakistan?",
        res: challenge,
      },
      {
        ques: "What are the biggest benefits of freelancing in Pakistan?",
        res: benefits,
      },
      {
        ques: "What are the drawbacks of freelancing in your opinion?",
        res: drawbacks,
      },
      {
        ques: "An advice that you would give to your past self when you started freelancing?",
        res: advice,
      },
    ]);
  }, []);
  return (
    <div>
      <div className="mx-auto w-max max-w-[90vw] sm:max-w-[75vw] bg-zinc-100 p-6 rounded-xl shadow-xl border mb-5">
        <h1 className="text-2xl font-bold text-center underline mb-6">
          Your Response:
        </h1>
        <ul className="">
          {data.map((x, index) => {
            const { ques, res } = x;
            return (
              <li key={index}>
                <h1 className="font-semibold text-xl">
                  {index + 1}. {ques}
                </h1>
                <p className="text-zinc-700 text-lg">{res}</p>
                <div className="border-b border-zinc-300 w-full my-1 mb-9"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Completion;
