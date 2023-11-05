//
//function updateCurrentTabURL() {
//  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//    if (tabs && tabs[0]) {
//      const currentURL = tabs[0].title;
//      console.log("Current page URL: " + currentURL);
//    }
//  });
//}
//
//updateCurrentTabURL();
//
//chrome.tabs.onActivated.addListener(function (activeInfo) {
//  updateCurrentTabURL();
//});


chrome.storage.local.get(['responseData'], function (result) {
    if (chrome.runtime.lastError) {
        const responseDataElement = document.getElementById('context');
        responseDataElement.textContent = 'Server response: ' + 'Loading';
    } else {
        const responseData = result.responseData;
        const responseDataElement = document.getElementById('context');
        responseDataElement.textContent = responseData.response;
        // Now, you can use responseData as an object.
    }
});

document.getElementById("main-form").onsubmit = (event) => {
    event.preventDefault();
}

const submitFormData = (formData) => {
    fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(_ => {
            document.getElementById("textarea").value = "";
            switchBtnState(false);
        })
        .catch(error => {
            console.error('Error:', error);
            switchBtnState(false);
        });
}

const switchBtnState = (state) => {
    document.getElementById("misleading-btn").disabled = state;
    document.getElementById("helpful-btn").disabled = state;
}

document.getElementById("helpful-btn").onclick = (event) => {
    switchBtnState(true);
    submitFormData({
        review: document.getElementById("textarea").value,
        reaction: "helpful"
    });
}

document.getElementById("misleading-btn").onclick = (event) => {
    switchBtnState(true);
    submitFormData({
        review: document.getElementById("textarea").value,
        reaction: "misleading"
    });
}

//document.addEventListener('DOMContentLoaded', function () {
//  chrome.runtime.sendMessage({ action: 'updateResponseData' }, function (response) {
//    const responseData = response.responseData;
//    if (responseData) {
//      // Update the content of the response-data element
//      const responseDataElement = document.getElementById('context');
//      responseDataElement.textContent = 'Server response: ' + responseData;
//    }
//  });
//});
