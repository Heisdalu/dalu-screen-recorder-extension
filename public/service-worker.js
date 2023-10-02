console.log("Hello bacground script");
console.log(this);


// eslint-disable-next-line no-undef
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // console.log(tabId, changeInfo, tab);
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    // eslint-disable-next-line no-undef
    chrome.scripting
      .insertCSS({
        target: { tabId: tabId },
        files: ["./content.css"],
      })
      .then(() => {
        console.log("INJECTED THE FOREGROUND STYLES.");

        // eslint-disable-next-line no-undef
        chrome.scripting
          .executeScript({
            target: { tabId: tabId },
            files: ["./content.js"],
          })
          .then(() => {
            console.log("INJECTED THE FOREGROUND SCRIPT.");
          });
      })
      .catch((err) => console.log(err));
  }
});
