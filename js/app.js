noos = window.noos || {};
noos.webApp = noos.webApp || {};

var webapp = noos.webApp;
webapp.urlbase = window.location.href.substring(0, window.location.href.lastIndexOf('/'));

window.onload = function() {
    noosLoadStyle('css/noosui.css', function() {
        noosLoadStyle('css/fontawesome.css', function() {
            noosLoadScript('js/libs/noosui.js', function() {
                noosLoadScript('js/main.js', function() {
                    runWebApp();
                });
            });
        });
    });
}

function noosLoadStyle(url, callback) {
    var head = document.head;
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = url;
    style.onreadystatechange = callback;
    style.onload = callback;
    head.appendChild(style);
}

function noosLoadScript(url, callback) {
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}

function noosLoadJSON(url, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}