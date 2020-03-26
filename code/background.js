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
