chrome.runtime.onInstalled.addListener(()=> {
  chrome.storage.sync.set({'buttonState': 0}, function() {
    console.log('Status saved');
  })
})


chrome.runtime.onMessage.addListener (
  (request, sender, sendResponse) => {
    // only handle message from self
    if (sender.id === chrome.runtime.id) {
        // console.log("received message");
        // console.log(request["name"]);
        chrome.cookies.getAll({domain: ".leetcode.com", name: request["name"]}, (result) => sendResponse(result[0]["value"]));

        // keep sendResponse channel open
        return true;
    }
   
  }
);
