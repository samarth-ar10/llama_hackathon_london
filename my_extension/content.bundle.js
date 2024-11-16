/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./sales-interface.js":
/*!****************************!*\
  !*** ./sales-interface.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// sales-interface.js

// Create a sales interface container
var salesInterface = document.createElement('div');
salesInterface.id = 'sales-interface';
salesInterface.classList.add('sales-interface');

// Add your sales interface elements here
var salesButton = document.createElement('button');
salesButton.innerText = 'Buy Now';
salesButton.classList.add('sales-button');
salesButton.addEventListener('click', function () {
  alert('Sales button clicked!');
});
salesInterface.appendChild(salesButton);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (salesInterface);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./content.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sales_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-interface.js */ "./sales-interface.js");


// Create the overlay container
var overlay = document.createElement('div');
overlay.id = 'custom-overlay';
overlay.classList.add('overlay');

// Add "Scroll Up" button
var scrollUpButton = document.createElement('button');
scrollUpButton.innerText = 'Scroll Up';
scrollUpButton.classList.add('scroll-up-button');
scrollUpButton.addEventListener('click', function () {
  window.scrollBy({
    top: -100,
    behavior: 'smooth'
  }); // Scroll up by 100px
});
overlay.appendChild(scrollUpButton);

// Add "Scroll Down" button
var scrollDownButton = document.createElement('button');
scrollDownButton.innerText = 'Scroll Down';
scrollDownButton.classList.add('scroll-down-button');
scrollDownButton.addEventListener('click', function () {
  window.scrollBy({
    top: 100,
    behavior: 'smooth'
  }); // Scroll down by 100px
});
overlay.appendChild(scrollDownButton);

// Add "Take Snapshot" button
var snapshotButton = document.createElement('button');
snapshotButton.innerText = 'Take Snapshot';
snapshotButton.classList.add('snapshot-button');
snapshotButton.addEventListener('click', function () {
  chrome.runtime.sendMessage({
    action: 'captureVisibleTab'
  }, function (response) {
    if (response && response.screenshotUrl) {
      // Create a new window to display the screenshot
      var screenshotWindow = window.open('', '_blank');
      screenshotWindow.document.write("<img src=\"".concat(response.screenshotUrl, "\" style=\"width:100%;\">"));
    } else {
      alert('Failed to capture screenshot.');
    }
  });
});
overlay.appendChild(snapshotButton);

// Append the sales interface to the overlay
overlay.appendChild(_sales_interface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

// Append the overlay to the body
document.body.appendChild(overlay);

// Style the overlay to be transparent and allow clicks to pass through
var style = document.createElement('style');
style.innerHTML = "\n    #custom-overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 9999;\n        pointer-events: none;\n    }\n    #custom-overlay > * {\n        pointer-events: auto;\n    }\n    .overlay {\n        background: rgba(0, 0, 0, 0.5);\n    }\n    .scroll-up-button, .scroll-down-button, .snapshot-button, .sales-button {\n        margin: 10px;\n    }\n";
document.head.appendChild(style);
})();

/******/ })()
;
//# sourceMappingURL=content.bundle.js.map