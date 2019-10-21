chrome.storage.sync.get({ enabled: 0 }, function (items) {
	if (items.enabled) {
		run()
	}
})

function run () {
  // get the group name from the search query
  var urlParams = new URLSearchParams(window.location.search)
  if (!urlParams.has('query')) {
    return
  }

  var requiredGroup = urlParams.get('query')

  // highlight the group red in the list
  var groupElementsCollection = document.getElementsByClassName('yg-grp-row')
  for (var i = 0; i < groupElementsCollection.length; i++) {
    var gname = groupElementsCollection[i].getAttribute('data-gname').toLowerCase()
    if (gname === requiredGroup.toLowerCase()) {
      return groupElementsCollection[i].style.border = '5px solid red'
    }
  }
}
