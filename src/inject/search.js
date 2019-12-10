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
  var found = false;

  // highlight the group red in the list
  var groupElementsCollection = document.getElementsByClassName('yg-grp-row')
  for (var i = 0; i < groupElementsCollection.length; i++) {
    var gname = groupElementsCollection[i].getAttribute('data-gname').toLowerCase()
    if (gname === requiredGroup.toLowerCase()) {
      groupElementsCollection[i].style.border = '5px solid red';
			var links = groupElementsCollection[i].getElementsByTagName('a');
			if (links.length > 0) {
				window.open(links[0].href, '_self');
			}
      found = true;
      break;
    }
  }

  if (found) return;

  // include a direct link for groups hidden from the directory
  var groupList = document.querySelector('#yg-srp-list > ul');
  var li = document.createElement('li')
  li.textContent = "Couldn't find group in directory--click here in case it's just hidden.";
  li.style.fontWeight = 'bold';
  li.style.color = 'red';
  li.style.cursor = 'pointer';
  li.onclick = function() { window.open('groups/' + requiredGroup + '/info'); };
  groupList.insertBefore(li, groupList.firstChild);
	li.click();
}
