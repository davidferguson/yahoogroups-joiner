document.getElementById('startbtn').onclick = function () {
  chrome.runtime.sendMessage({
    type: 'start'
  }, function(response) {
    // don't care about a response
  })
}

var enabled = document.getElementById('enabled')

chrome.storage.sync.get({ enabled: 0 }, function (items) {
	enabled.checked = items.enabled
})

enabled.onclick = function () {
  chrome.storage.sync.set({
		enabled: enabled.checked
	})
}
