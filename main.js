const fullDataContainer = document.querySelector("#fullData");
const securitySettignsContainer = document.querySelector("#securitySettings");
const traidingSessionsContainer = document.querySelector("#traidingSessions");

const requestBtn = document.querySelector("#requestBtn");
let req = new XMLHttpRequest();
const serverUrl = 'http://localhost:8099';

requestBtn.addEventListener("click", getData)

function renderData(data, wrapperEl) {
    const div = document.createElement("DIV");
    div.innerText = data;
    wrapperEl.appendChild(div);
}

function getFullData() {
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
    req.responseType = "json";
    req.open("GET", serverUrl + "/security_settings", true);
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

function getTraidSessions() {
    req.responseType = "json";
    req.open("GET", serverUrl + "/traiding_sessions", true);
    req.send();

    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let data = JSON.parse(req.response);
                renderData(data, traidingSessionsContainer)
            } else {
                renderData("Cant read Data", traidingSessionsContainer)
            }
        }
    }
}



function getData() {
    return new Promise((res, rej)=>{
        console.log(1)
        getFullData();
        res(); 
    }).then(()=> {
        console.log(2)
        getSecSettings();
    }).then(()=> {
        console.log(3)
        getTraidSessions();
    })
}
