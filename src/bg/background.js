var SERVER_URL = 'http://df58.host.cs.st-andrews.ac.uk/yahoogroups/'
var YAHOO_URL = 'https://groups.yahoo.com/neo/groups/<GROUP>/info'

// request a group, and go to it
function requestGroup (cb) {
  var request = new XMLHttpRequest()
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status !== 200) {
        console.error(this.status)
        return alert('Error getting group from server - check dev console')
      }

      // extract group name from request
      var group
      var groupObj = this.responseText
      try {
        group = JSON.parse(groupObj).name
      } catch (e) {
        console.error(e)
        return alert('Error parsing group JSON - check dev console')
      }

      if (group === null) {
        if (typeof cb === 'function') cb(null)
        return
      }

      // build up URL
      var groupUrl = YAHOO_URL.replace('<GROUP>', group)
      //chrome.tabs.create({ url: groupUrl })
      cb(groupUrl)
    }
  }
  var getUrl = SERVER_URL + 'get/'
  request.open('GET', getUrl, true)
  request.send()
}


// listen to messages from popup and content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse()

  // handler for starting it
  if (request.type === 'start') {
    requestGroup(function (group) {
      if (group === null) {
        return alert('no groups available')
      }
      chrome.tabs.create({ url: group })
    })
  }

  // handler for group archived
  if (request.type === 'joined') {
    var group = request.group
    var getUrl = SERVER_URL + 'joined/' + encodeURIComponent(group) + '/'
    var request = new XMLHttpRequest()
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status !== 200) {
          console.error(status)
          return alert('Error reporting join successful to server - check dev console')
        } else {
          // get a new group, and run again!
          requestGroup(function (url) {
            console.log('got back res', url)
            if (url === null) {
              return alert('no more groups available')
            }
            chrome.tabs.update(sender.tab.url.id, {url: url});
          })
        }
      }
    }
    request.open('GET', getUrl, true)
    request.send()
  }
})
