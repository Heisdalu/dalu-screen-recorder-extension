import { FC } from "react";
import { Logo } from "./assets/Logo";
import Setting from "./assets/Setting";
import Circle from "./assets/Circle";
import Monitor from "./assets/Monitor";
import CurrentTab from "./assets/CurrentTab";
import Camera from "./assets/Camera";

const App: FC = () => {
  return (
    <div className="w-[300px] p-1.5 pb-2 rounded-[1.5rem] bg-[#fff] lol">
      <header className="flex items-center">
        <div className="flex items-center text-[1rem] space-x-0.5">
          <Logo />
          <h1 className="font-sora font-bold ">HelpMeOut</h1>
        </div>

        <div className="flex ml-auto items-center space-x-1">
          <Setting />
          <Circle />
        </div>
      </header>

      <p className="font-workSans font-[400] max-w-[14.0625rem] mt-1 mb-2">
        This extension helps you record and share help videos with ease.
      </p>

      <div className="space-y-1.5">
        <div className="flex justify-center space-x-2">
          <button className="flex flex-col space-y-0.5">
            <span className="block mx-auto">
              <Monitor />
            </span>
            <span className="font-workSans font-[500] text-[#928FAB]">
              Full screen
            </span>
          </button>

          <button className="flex flex-col space-y-0.5">
            <span className="block mx-auto">
              <CurrentTab />
            </span>
            <span className="font-workSans font-[500] text-[#120B48]">
              Current Tab
            </span>
          </button>
        </div>

        <button className="border-1 border-[#100A42] rounded-[0.75rem] w-[100%] flex p-[0.75rem] items-center">
          <span className="space-x-0.5 flex items-center">
            <Camera />
            <h1 className="text-[0.875rem] font-workSans font-[500]">Camera</h1>
          </span>
          <span className="ml-auto h-[1rem] w-[2.25rem] block bg-[#120b48]"></span>
        </button>

        <button className="border-1 border-[#100A42] rounded-[0.75rem] w-[100%] flex p-[0.75rem] items-center">
          <span className="space-x-0.5 flex items-center">
            <Camera />
            <h1 className="text-[0.875rem] font-workSans font-[500]">Audio</h1>
          </span>
          <span className="ml-auto h-[1rem] w-[2.25rem] block bg-[#120b48]"></span>
        </button>

        <button className="bg-[#120B48] text-[1rem] font-workSans font-[500] text-[#FAFDFF] rounded-[0.75rem] w-[100%] flex p-[0.75rem] justify-center">
          Start Recording
        </button>
      </div>
    </div>
  );
};

export default App;
