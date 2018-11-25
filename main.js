const fullDataContainer = document.querySelector("#fullData");
const securitySettignsContainer = document.querySelector("#securitySettings");
const tradingSessionsContainer = document.querySelector("#tradingSessions");

const requestBtn = document.querySelector("#requestBtn");

const serverUrl = 'http://localhost:8099';

requestBtn.addEventListener("click", getData);

function renderData(data, wrapperEl) {
    const div = document.createElement("DIV");
    div.innerText = data;
    wrapperEl.appendChild(div);
}

function getFullData() {
    let req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("GET", serverUrl + "/");

    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                renderData(JSON.stringify(req.response),  fullDataContainer)
            } else {
                renderData("Cant read Data", fullDataContainer)
            }
        }
        
    }
    req.send();
};

function getSecSettings() {
    let req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("GET", serverUrl + "/security_settings");
    req.send();

    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            console.log(req.status)
            if (req.status === 200) {
                renderData(JSON.stringify(req.response),  securitySettignsContainer)
            } else {
                renderData("Cant read Data", securitySettignsContainer)
            }
        }
    }

}

function getTradSessions() {
    let req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("GET", serverUrl + "/trading_sessions");
    req.send();

    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                renderData(JSON.stringify(req.response), tradingSessionsContainer)
            } else {
                renderData("Cant read Data", tradingSessionsContainer)
            }
        }
    }
}

function getData() {
    getFullData();
    getSecSettings();
    getTradSessions();
}