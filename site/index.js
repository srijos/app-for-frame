console.log('index.js loaded!');
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    console.log('In window.receiveMessage: origin: ', event.origin);
    if (event.origin !== "http://localhost:8081")
        return;
    console.log('In window.receiveMessage: data: ', event.data);
    const { name } = JSON.parse(event.data);
    console.log('In window.receiveMessage: name: ', name);
    if(name) {
        document.querySelector('#name').innerHTML = ' ' + name;
    }
}

sendPostMessage = (message) => {
    console.log("sending message: ", message);
    const iFrame = document.getElementsByName("myFrame")[0];
    iFrame.contentWindow.postMessage(message, 'http://localhost:8081');
}

sendReply = () => {
    const reply = document.getElementById('reply').value;
    console.log('In sendReply: ' + reply);
    sendPostMessage(JSON.stringify({ reply }));
}