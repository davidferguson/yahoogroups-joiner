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
	var clickedJoin = false;
	var loadDate = new Date();
	var loadTime = loadDate.getTime();
	
	// Start an interval checking how long we've been trying to join the current group.
	var joinAttemptInterval = setInterval(function () {
		var currentDate = new Date();
		var currentTime = currentDate.getTime();
		
		// It's been over 5 minutes since we started trying to join the group.
		// Refresh and try again.
		if (currentTime - loadTime > 600000) {
			clickedJoin = false;
			loadDate = new Date();
			loadTime = loadDate.getTime();
			location.reload(true)
		}
	}, 5000)

	if (!!joinButton) {
		// group hasn't been joined, start an interval looking for the error message
		var errorMessageInterval = setInterval(function () {
			
			// Look for the Send Request button that pops up after clicking Join Group.
			var sendRequestButton = document.getElementById('send_request')
			
			// If there is no button, click Join Group after a random delay.
			if (!sendRequestButton) {
				var joinDelay = Math.round(Math.random() * 2000) + 500;
				var joiningTimeout = setTimeout(function () {
					if (!clickedJoin) {
						joinButton.click();
						clickedJoin = true;
					}
				}, joinDelay)
			}
			
			// Check if the group is asking for a commment to join.
			var commentBox = document.getElementById('owner_comment')
			if (!!commentBox) {
				commentBox.value = "Archive Team is creating a public archive of Yahoo Groups before Yahoo permanently deletes their data after January 31. May we archive your group, please?";
			}
			
			// If Send Request is enabled (meaning the captcha has been solved correctly), click it.			
			if (!!sendRequestButton) {
				if (!sendRequestButton.disabled) {
					sendRequestButton.click();
				}
			}
			
			var yahoosucks = document.getElementById('err-msg-comment')
			if (yahoosucks && yahoosucks.innerText.trim() !== "") {
				// if we see the error message, clear the interval and reload the page
				clearInterval(errorMessageInterval)
				clickedJoin = false;
				loadDate = new Date();
				loadTime = loadDate.getTime();
				location.reload(true)
			}
		}, 500)
	}

	// group is joined
	if (!joinButton) {		
		// send the message
		chrome.extension.sendMessage({
			type: 'joined',
			group: groupName,
			email: document.getElementById('yucs-meta').getAttribute('data-userid')
		}, function(response) {
	    // don't care about a response
		})

	}
}
