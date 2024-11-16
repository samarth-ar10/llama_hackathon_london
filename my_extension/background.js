chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'captureVisibleTab') {
        chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
            sendResponse({ screenshotUrl: dataUrl });
        });
        return true; // Indicates that the response is asynchronous
    }
});
