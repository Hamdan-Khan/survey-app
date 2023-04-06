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
      <div className="py-4 mb-12 max-w-max mx-auto">
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
      <footer className="m-auto flex items-center justify-center mt-4 mb-1">
        <a
          href="https://hamdan-k.me"
          className="mx-1 hover:underline duration-300"
        >
          &#169;Hamdan-Khan
        </a>
        <a
          href="https://github.com/Hamdan-Khan/survey-app"
          target="_blank"
          className="mx-1 flex hover:font-medium items-center justify-center duration-300"
        >
          <span class="material-symbols-outlined mb-1">star</span>Star this repo
        </a>
      </footer>
    </>
  );
}

export default App;
