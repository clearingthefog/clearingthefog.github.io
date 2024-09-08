// change url with no redirect
function setURLParam(key, val) {
    var url = new URL(window.location.href);
    url.searchParams.set(key, val);
    window.history.replaceState('', '', url.href)
}

// get url value
function getURLParam(name, defaultval=null, setdefaultonmissing=false) {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(name)) {
        return searchParams.get(name);
    } else {
        if (setdefaultonmissing) {
            setURLParam(name, defaultval);
        };
        return defaultval;
    }
}

function updateIFrame(frameID, src) {
    let frame = $('iframe#'+frameID);
    // console.log(src);
    frame.attr('src', src);
}


$(document).ready(function(){

    // go home on header click
    $("#header-text").on("click", function(){
        window.location.href = '/';
    });

});