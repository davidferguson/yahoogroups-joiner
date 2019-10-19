// get group name
var groupNameRegex = /^.*?groups\.yahoo\.com\/neo\/groups\/(.+?)\/info.*?$/g
var match = groupNameRegex.exec(window.location.href);
var groupName = match[1]

var joinButton = document.getElementById('yg-join-group')

if (!!joinButton) {
	// group hasn't been joined, make the request
	var joinButtonClickInterval = setInterval(function () {
		var joinWindowOpen = !!document.getElementById('yg-join-group-panel')
		if (joinWindowOpen) {
			return clearInterval(joinButtonClickInterval)
		}
		joinButton.click()
	}, 500)
}


if (!joinButton) {
	// group is joined, send the message
	chrome.extension.sendMessage({
		type: 'joined',
		group: groupName
	}, function(response) {
    // don't care about a response
	})

}
