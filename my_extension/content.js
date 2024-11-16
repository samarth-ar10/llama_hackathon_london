import salesInterface from './sales-interface.js';

// Create the overlay container
const overlay = document.createElement('div');
overlay.id = 'custom-overlay';
overlay.classList.add('overlay');

// Add "Scroll Up" button
const scrollUpButton = document.createElement('button');
scrollUpButton.innerText = 'Scroll Up';
scrollUpButton.classList.add('scroll-up-button');
scrollUpButton.addEventListener('click', () => {
    window.scrollBy({ top: -100, behavior: 'smooth' }); // Scroll up by 100px
});
overlay.appendChild(scrollUpButton);

// Add "Scroll Down" button
const scrollDownButton = document.createElement('button');
scrollDownButton.innerText = 'Scroll Down';
scrollDownButton.classList.add('scroll-down-button');
scrollDownButton.addEventListener('click', () => {
    window.scrollBy({ top: 100, behavior: 'smooth' }); // Scroll down by 100px
});
overlay.appendChild(scrollDownButton);

// Add "Take Snapshot" button
const snapshotButton = document.createElement('button');
snapshotButton.innerText = 'Take Snapshot';
snapshotButton.classList.add('snapshot-button');
snapshotButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'captureVisibleTab' }, (response) => {
        if (response && response.screenshotUrl) {
            // Create a new window to display the screenshot
            const screenshotWindow = window.open('', '_blank');
            screenshotWindow.document.write(
                `<img src="${response.screenshotUrl}" style="width:100%;">`
            );
        } else {
            alert('Failed to capture screenshot.');
        }
    });
});
overlay.appendChild(snapshotButton);

// Append the sales interface to the overlay
overlay.appendChild(salesInterface);

// Append the overlay to the body
document.body.appendChild(overlay);

// Style the overlay to be transparent and allow clicks to pass through
const style = document.createElement('style');
style.innerHTML = `
    #custom-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        pointer-events: none;
    }
    #custom-overlay > * {
        pointer-events: auto;
    }
    .overlay {
        background: rgba(0, 0, 0, 0.5);
    }
    .scroll-up-button, .scroll-down-button, .snapshot-button, .sales-button {
        margin: 10px;
    }
`;
document.head.appendChild(style);