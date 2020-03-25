chrome.runtime.onMessage.addListener(function(event) {
  switch (event.type) {
    case 'download':
      chrome.downloads.download(
        {
          url: event.url,
          filename: event.filename
        },
        function() {}
      );
  }
  return false;
})
// chrome.runtime.onInstalled.addListener(function() {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })
//       ],
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });
