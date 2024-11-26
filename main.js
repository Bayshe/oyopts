const API_KEY = 'AIzaSyAiNzIpV0wO8OFnC_oUi7vzNThwOG888H4';

window.gapi.client.init({
    apiKey: API_KEY, 
    discoveryDocs: 'https://forms.googleapis.com/$discovery/rest?version=v1',
    scope: ["https://www.googleapis.com/auth/forms.body"],
}).then(() => {
    window.gapi.client.request({path:''})
})

