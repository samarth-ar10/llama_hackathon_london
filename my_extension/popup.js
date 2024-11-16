document.getElementById('actionButton').addEventListener('click', () => {
    chrome.tabs.captureVisibleTab(null, {}, (image) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            // Do something with the captured image
            console.log('Screenshot taken:', image);
        }
    });
});