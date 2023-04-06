import FormPage1 from "./components/FormPage1";
import FormPage2 from "./components/FormPage2";
import FormPage3 from "./components/FormPage3";
import useStore from "./store/store";
import Navbar from "./components/Navbar";
import Completion from "./components/Completion";
import Progress from "./components/Progress";

function App() {
  const formState = useStore((state) => state.formState);
  const setFormState = useStore((state) => state.setFormState);
  const formStatus = useStore((state) => state.formStatus);
  return (
    <>
      <Navbar />
      <div className="">
        {formState == "one" && <FormPage1 />}
        {formState == "two" && <FormPage2 />}
        {formState == "three" && <FormPage3 />}
        {formState == "done" && <Completion />}
        {formState !== "done" && (
          <Progress
            state={formState}
            setFormState={setFormState}
            status={formStatus}
          />
        )}
      </div>
    </>

    // unlocking functionality and going to previous pages functionality

    // Section 1: Freelance Work
    // What type of freelance work do you specialize in? 00
    // How many hours per week do you typically work as a freelancer? 00
    // What resources do you rely on for finding freelance work? 00

    // Section 2: Freelance Income
    // How do you typically receive payments for your work? 00
    // 6. Do you think freelancing is a reliable source of income? 00
    // Are you satisfied with your current level of income as a freelancer?
    // Do you have any other source of income? 00

    // Section 3: Freelance Support
    // 9. What types of training or support do you think would be most helpful for freelancers in Pakistan?
    // What challenges have you faced as a freelancer in Pakistan?
    // What are the biggest benefits of freelancing in Pakistan?
    // What are the biggest drawbacks of freelancing in Pakistan?
    // How has the COVID-19 pandemic impacted your freelance work?
  );
}

export default App;
