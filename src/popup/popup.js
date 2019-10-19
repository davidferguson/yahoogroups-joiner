document.getElementById('startbtn').onclick = function () {
  chrome.runtime.sendMessage({
    type: 'start'
  }, function(response) {
    // don't care about a response
  })
}
