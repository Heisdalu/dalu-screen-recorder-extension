import { Logo } from "../assets/Logo";
import Setting from "../assets/Setting";
import Circle from "../assets/Circle";
import Monitor from "../assets/Monitor";
import CurrentTab from "../assets/CurrentTab";
import Camera from "../assets/Camera";
import { useState } from "react";

const PopUp = () => {
  const [activeVideo, setActiveVideo] = useState(true);
  const [activeAudio, setActiveAudio] = useState(true);
  const clickAudio = () => {
    setActiveAudio((prev) => !prev);
  };
  const clickVideo = () => {
    setActiveVideo((prev) => !prev);
  };

  const clickHandler = async () => {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });
      const response = await chrome.tabs.sendMessage(tab.id!, {
        action: "start_recording",
        audio: activeVideo,
      });

      chrome.windows.getLastFocused((w) => {
        chrome.extension
          .getViews({ type: "popup", windowId: w.id })
          .forEach((v) => v.close());
      });

      if (!chrome.runtime.lastError) {
        console.log(response[0]);
      } else {
        // console.log(chrome.runtime.lastError, "error line 38");
        throw new Error("Permission denied");
      }
    } catch {
      console.log("error occured");
    }
  };

  // console.log(rec);

  return (
    <div className="h-[100%] w-[300px] p-1.5 pb-2 rounded-[1.5rem] bg-[#fff] lol">
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
          <div
            onClick={clickVideo}
            className={`ml-auto transition-all duration-[0.5s] p-[0.125rem] rounded-[0.75rem] h-[1.25rem] w-[2.25rem] flex items-center ${
              activeVideo ? "bg-[#120B48]" : "bg-[#ccc]"
            }`}
          >
            <div
              className={`transition-all duration-[0.5s] h-[1rem] w-[1rem] bg-white rounded-[50%] ${
                activeVideo ? "translate-x-[100%]" : "translate-x-0"
              }`}
            ></div>
          </div>
        </button>

        <button className="border-1 border-[#100A42] rounded-[0.75rem] w-[100%] flex p-[0.75rem] items-center">
          <span className="space-x-0.5 flex items-center">
            <Camera />
            <h1 className="text-[0.875rem] font-workSans font-[500]">Audio</h1>
          </span>
          {/* toggle button */}
          <div
            onClick={clickAudio}
            className={`ml-auto transition-all duration-[0.5s] p-[0.125rem] rounded-[0.75rem] h-[1.25rem] w-[2.25rem] flex items-center ${
              activeAudio ? "bg-[#120B48]" : "bg-[#ccc]"
            }`}
          >
            <div
              className={`transition-all duration-[0.5s] h-[1rem] w-[1rem] bg-white rounded-[50%] ${
                activeAudio ? "translate-x-[100%]" : "translate-x-0"
              }`}
            ></div>
          </div>
        </button>

        <button
          onClick={clickHandler}
          className="bg-[#120B48] text-[1rem] font-workSans font-[500] text-[#FAFDFF] rounded-[0.75rem] w-[100%] flex p-[0.75rem] justify-center"
        >
          Start Recording
        </button>
      </div>
    </div>
  );
};
export default PopUp;
