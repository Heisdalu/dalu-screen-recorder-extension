console.log("i am injected already, zenitsu");

let recorder, stream, audio, mixedStream, stopAction;

const desktop_Ui = `
<div class="overallBoxDalu" id="containerDalu">
 <div class="containerDalu" id="subContainerDalu">

        <div class="my_modalDalu">
          <div class="timerDalu">
            <span>00:00:00</span>
            <span class="redDotDalu"></span>
          </div>
          <div class="pauseDalu">
            <div class="pauseLineDalu">
              <svg
                class="line_svgDalu"
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="14"
                viewBox="0 0 2 14"
                fill="none"
              >
                <path
                  d="M1 1.5L1 12.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="14"
                viewBox="0 0 2 14"
                fill="none"
              >
                <path
                  d="M1 1.5L1 12.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <span>Pause</span>
          </div>
          <div class="stopDalu">
            <div class="stopLineDalu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.25 7.5C5.25 6.25736 6.25736 5.25 7.5 5.25H16.5C17.7426 5.25 18.75 6.25736 18.75 7.5V16.5C18.75 17.7426 17.7426 18.75 16.5 18.75H7.5C6.25736 18.75 5.25 17.7426 5.25 16.5V7.5Z"
                  stroke="#0F172A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>Stop</div>
          </div>
          <div class="cameraDalu">
            <div class="cameraLineDalu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z"
                  stroke="#0F172A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>Camera</div>
          </div>
          <div class="micDalu">
            <div class="micLineDalu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z"
                  stroke="#0F172A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>Mic</div>
          </div>

          <div class="deleteDalu" id="delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432"
                stroke="#BEBEBE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          
        </div>
      </div>
      </div>
`;

const loading_UI = `<a href="#dalu" id='loadingDalu' class="loadingDalu">Loading Video...</a>`;

// generate random string
function generateRandomString() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * 10);
    result += characters.charAt(randomIndex);
  }

  return result;
}

//event-listeners
const commands = () => {
  document.querySelector(".deleteDalu").addEventListener("click", () => {
    recorder.stop();
    stream.getTracks().forEach((track) => track.stop());
    audio.getTracks().forEach((track) => track.stop());
    document.getElementById("containerDalu").remove();
    recorder = stream = audio = mixedStream = stopAction = "";
  });

  document.querySelector(".stopDalu").addEventListener("click", () => {
    stopAction = true;
    recorder.stop();
    stream.getTracks().forEach((track) => track.stop());
    audio.getTracks().forEach((track) => track.stop());
    document.getElementById("subContainerDalu").remove();
    document
      .getElementById("containerDalu")
      .insertAdjacentHTML("beforeend", loading_UI);
  });
};

// make link active
function activateLink(id) {
  const redirect_dalu_url = document.getElementById("loadingDalu");
  redirect_dalu_url.textContent = "Your video is ready. click here";
  redirect_dalu_url.target = "_blank";
  redirect_dalu_url.href = `https://dalu-screen-recorder-app.vercel.app/video/${id}`;
  recorder = stream = audio = mixedStream = stopAction = null;
  document.getElementById("containerDalu").addEventListener("click", () => {
    setTimeout(() => {
      document.getElementById("containerDalu").remove();
    }, 500);
  });
}

// an api request to send chunks
const sendChunks = async (form_data, id) => {
  const daluClientUrl = "https://seashell-app-4jicj.ondigitalocean.app/api";

  try {
    const data = await fetch(`${daluClientUrl}/video/stream`, {
      method: "POST",
      body: form_data,
    });

    if (!data.ok) {
      throw new Error("Network response was not ok");
    } else {
      activateLink(id);
      const endStream = await fetch(`${daluClientUrl}/stream/end/${id}`);
      console.log(await endStream.json());
    }
  } catch (e) {
    alert("Recording failed to connect to the endpoint");
    document.getElementById("containerDalu").remove();
  }
};

//another func
const recordingProcess = async () => {
  console.log("Recoding");
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: { width: 9999999999, height: 9999999999 },
    });

    audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
      },
    });

    if (audio && stream) {
      mixedStream = new MediaStream([
        ...stream.getTracks(),
        ...audio.getTracks(),
      ]);
    } else {
      console.log("something went wrong");
    }

    recorder = new MediaRecorder(mixedStream);
    recorder.start();

    const chunks = [];

    recorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    recorder.onstop = () => {
      if (stopAction) {
        const id = generateRandomString();
        const formData = new FormData();
        const completeBlob = new Blob(chunks, { type: "video/mp4" });
        formData.append("blob", completeBlob);
        formData.append("videoId", id);
        // console.log(URL.createObjectURL(completeBlob));
        // console.log(id);
        sendChunks(formData, id);
      }
    };
  } catch (e) {
    // console.log(document.getElementById("containerDalu"));
    alert("Permission denied");
    document.getElementById("containerDalu").remove();
  }
};

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start_recording") {
    const element = document.getElementById("containerDalu");
    // console.log(element);
    if (!element) {
      document
        .querySelector("body")
        .insertAdjacentHTML("beforeend", desktop_Ui);

      commands();
      recordingProcess();
    }
    // console.log("I received your info", message, sender, sendResponse);
    sendResponse({ done: "asssessssssss" });
  }
});
