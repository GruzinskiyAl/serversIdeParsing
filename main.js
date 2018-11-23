const dataContainer = document.querySelector("#allDataBlock");
const requestBtn = document.querySelector("#requestBtn");
const req = new XMLHttpRequest();
const serverUrl = 'http://localhost:8099';

requestBtn.addEventListener("click", getAllData)

function createDataBlock(data) {
    const div = document.createElement();
    div.innerText = data;
    dataContainer.appendChild(div);
}

function getAllData() {
    req.responseType = 'json';
    req.open('GET', serverUrl + "/");
    req.onreadystatechange  = () => {
        if (req.readyState === 4) {
            let jsonResponse = req.response;
            let data = JSON.parse(jsonResponse);
            createDataBlock(data);
        }
    };
    req.send(null);
}

// setInterval( () => {
//     settingsRequest();
// }, 5000);
