chrome.storage.sync.get({ enabled: 0 }, function (items) {
	if (items.enabled) {
		run()
	}
})

function run () {
	// get group name
	var groupNameRegex = /^.*?groups\.yahoo\.com\/neo\/groups\/(.+?)\/info.*?$/g
	var match = groupNameRegex.exec(window.location.href);
	var groupName = match[1]

	var joinButton = document.getElementById('yg-join-group')

	if (!!joinButton) {
		// group hasn't been joined, start an interval looking for the error message
		var errorMessageInterval = setInterval(function () {
			var yahoosucks = document.getElementById('err-msg-comment')
			if (yahoosucks && yahoosucks.innerText.trim() !== "") {
				// if we see the error message, clear the interval and reload the page
				clearInterval(errorMessageInterval)
				location.reload(true)
			}
		}, 500)
	}


	if (!joinButton) {
		// group is joined, send the message
		chrome.extension.sendMessage({
			type: 'joined',
			group: groupName,
			email: document.getElementById('yucs-meta').getAttribute('data-userid')
		}, function(response) {
	    // don't care about a response
		})

	}
}
