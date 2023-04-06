import React, { useState } from "react";
import useStore from "../store/store";
import { shallow } from "zustand/shallow";

const FormPage2 = () => {
  const setFormState = useStore((state) => state.setFormState);
  const setFormStatus = useStore((state) => state.setFormStatus);

  const [source, setSource] = useState("sel");
  const [inpMethod, setInpMethod] = useState("sel");

  const [
    reliable,
    method,
    osource,
    satisf,
    setReliable,
    setMethod,
    setOsource,
    setSatisf,
  ] = useStore(
    (state) => [
      state.reliable,
      state.method,
      state.osource,
      state.satisf,
      state.setReliable,
      state.setMethod,
      state.setOsource,
      state.setSatisf,
    ],
    shallow
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (!reliable || !method || !osource || !satisf) {
      return alert("Please fill all the compuslory fields");
    } else {
      setFormState("three");
      setFormStatus("third");
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col items-start justify-center gap-2 p-2 px-3">
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="reliable">
            Do you think freelancing is a reliable source of income?
          </label>
          <select
            className="px-3 py-1.5"
            id="reliable"
            onChange={(e) => setReliable(e.target.value)}
            name="reliable"
            value={reliable}
          >
            <option value="">Select</option>
            <option value="Yes, I have consistently earned from freelancing.">
              Yes, I have consistently earned from freelancing.
            </option>
            <option value="No, it is not a reliable source of income.">
              No, it is not a reliable source of income.
            </option>
            <option value="Depends on the type of work and the current market demand.">
              Depends on the type of work and the current market demand.
            </option>
            <option value="Not sure, I am new to freelancing.">
              Not sure, I am new to freelancing.
            </option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="method">
            What is your payment method?
          </label>
          <select
            className="px-3 py-1.5"
            id="method"
            onChange={(e) => {
              setMethod(e.target.value);
              setInpMethod(e.target.value);
            }}
            name="method"
          >
            <option value="sel">Select</option>
            <option value="Payoneer">Payoneer</option>
            <option value="Bank Account">Bank Account</option>
            <option value="Wise">Wise</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="">Other</option>
          </select>
          {inpMethod === "" ? (
            <input
              type="text"
              name="method"
              placeholder="Enter payment method"
              maxLength={"40"}
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            />
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="method">
            Do you have any other source of income?
          </label>
          <select
            className="px-3 py-1.5"
            id="osource"
            onChange={(e) => {
              setSource(e.target.value);
              setOsource(e.target.value);
            }}
            name="osource"
          >
            <option value="sel">Select</option>
            <option value="No, I only earn from freelancing.">
              No, I only earn from freelancing.
            </option>
            <option value="">Yes</option>
          </select>
          {source === "" ? (
            <input
              type="text"
              name="osource"
              placeholder="Enter other source of income(Job, Business, etc.)"
              maxLength={"40"}
              value={osource}
              onChange={(e) => setOsource(e.target.value)}
            />
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col gap-1 mb-1">
          <label className="block" htmlFor="satisf">
            Are you satisifed with your current source of income?
          </label>
          <select
            className="px-3 py-1.5"
            id="satisf"
            name="satisf"
            value={satisf}
            onChange={(e) => setSatisf(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes, I am satisfied">Yes, I am satisfied</option>
            <option value="No, I have the potential to earn more/ I am being underpaid.">
              No, I have the potential to earn more/ I am being underpaid.
            </option>
          </select>
        </div>
        <button onClick={submitHandler}>Next</button>
      </form>
    </div>
  );
};

export default FormPage2;
