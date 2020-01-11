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
	var loadDate = new Date();
	var loadTime = loadDate.getTime();
	
	// Start an interval checking how long we've been trying to join the current group.
	var joinAttemptInterval = setInterval(function () {
		var currentDate = new Date();
		var currentTime = currentDate.getTime();
		
		// It's been over 5 minutes since we started trying to join the group.
		// Refresh and try again.
		if (currentTime - loadTime > 600000) {
			loadDate = new Date();
			loadTime = loadDate.getTime();
			location.reload(true)
		}
	}, 5000)

	if (!!joinButton) {
		// group hasn't been joined, start an interval looking for the error message
		var errorMessageInterval = setInterval(function () {
			

			
			// Look for the panel that pops up after clicking Join Group.
			var panelVisible = false;
			var joinPanel = document.getElementById('yg-join-group-panel');
			if (!!joinPanel){
				if (window.getComputedStyle(joinPanel).display !== "none"){
					panelVisible = true;
				}
			}
			
			// If the panel isn't visible, click Join Group after a random delay.
			if (!panelVisible) {
				var joinDelay = Math.round(Math.random() * 2000) + 500;
				var joiningTimeout = setTimeout(function () {
					joinButton.click();
				}, joinDelay)
			}
			
			// Check if the group is asking for a commment to join.
			var commentBox = document.getElementById('owner_comment')
			if (!!commentBox) {
				commentBox.value = "Archive Team is creating a public archive of Yahoo Groups before Yahoo permanently deletes their data after January 31. May we archive your group, please?";
			}
			
			// If Send Request is enabled (meaning the captcha has been solved correctly), click it.	
			var sendRequestButton = document.getElementById('send_request')			
			if (!!sendRequestButton) {
				if (!sendRequestButton.disabled) {
					sendRequestButton.click();
				}
			}
			
			// Check if anti-captcha is displaying an error message.
			var anticaptchasucks = false;
			if (panelVisible) {		
				var errorNode = document.getElementsByClassName("captcha-error-node");
				if (errorNode.length > 0) {
					if (errorNode[0].innerText.trim() !== "") {						
						anticaptchasucks = true;
					}
				}
				
				var errorNode2 = document.getElementsByClassName("antigate_solver recaptcha error");
				if (errorNode2.length > 0) {
					if (errorNode2[0].innerText.trim() !== "") {						
						anticaptchasucks = true;
					}
				}
			}
			
			// Check if Yahoo is displaying an "error loading content" message. It's usually hidden.
			var yahoosucks = false;
			var loadingError = document.getElementById('yg-error-container');
			if (!!loadingError){
				if (!loadingError.classList.contains('hide')) {
					yahoosucks = true;
				}
			}
			
			var errMsg = document.getElementById('err-msg-comment');
			if (!!errMsg){
				if (errMsg.innerText.trim() !== "") {						
						yahoosucks = true;
					}
			}
			
			// If there is an error, clear the interval and reload the page.
			if (yahoosucks || anticaptchasucks) {
				clearInterval(errorMessageInterval)
				loadDate = new Date();
				loadTime = loadDate.getTime();
				location.reload(true)
			}
		}, 5000)
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
