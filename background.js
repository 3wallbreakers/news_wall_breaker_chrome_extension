chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: breakwall
  });
});

function breakwall() {
  var url = "https://archive.ph/submit/?url=" + document.location
  window.open(url);
}
