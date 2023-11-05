// let responseData = ""
//
// chrome.runtime.onInstalled.addListener(function () {
//     console.log("Hello from background");
// });
//
// chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//     const currentURL = tabs[0].title;
//     console.log("Current page URL: " + currentURL);
// });
//
// function updateCurrentTabURL() {
//     chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//         if (tabs && tabs[0]) {
//             const currentURL = tabs[0].title;
//             console.log("Current page URL: " + currentURL);
//         }
//     });
// }
//
// updateCurrentTabURL();
//
// chrome.tabs.onActivated.addListener(function (activeInfo) {
//     updateCurrentTabURL();
// });
//
// chrome.tabs.query({}, function (tabs) {
//     tabs.forEach(function (tab) {
//         updateTabInfo(tab.id);
//     });
// });
//
// function updateTabInfo(tabId) {
//     chrome.tabs.get(tabId, function (tab) {
//         if (tab) {
//             const currentURL = tab.url;
//             const currentTitle = tab.title;
//             console.log("Tab URL: " + currentURL);
//             console.log("Tab Title: " + currentTitle);
//             const data = {
//                 title: currentTitle
//             };
//             fetch('http://127.0.0.1:5000/submit', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//                 .then(response => response.json())
//                 .then(responseData => {
//                     console.log('Server response:', responseData);
//                     chrome.storage.local.set({responseData: responseData}, function () {
//                         if (chrome.runtime.lastError) {
//                             console.error('Error storing response data: ' + chrome.runtime.lastError);
//                         } else {
//                             console.log('Response data stored successfully.');
//                         }
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                 });
//         }
//     });
// }
//
//
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     if (changeInfo.status === "complete") {
//         updateTabInfo(tabId);
//     }
// });
//
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.action === 'updateResponseData') {
//         sendResponse({responseData: responseData});
//     }
// });
