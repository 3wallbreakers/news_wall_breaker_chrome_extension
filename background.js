chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: breakwall
  });
});

function breakwall() {
  var url = "https://3wallbreakers.deta.dev/news_wall_breaker/?url=" + document.location
  window.open(url);
}
