function toggleVisibility(clss, setUrl) {
    $("."+clss).toggle();
    // change url param to opposite of current
    if (setUrl) {
        let current = parseInt(getURLParam('complex', 0, true));
        setURLParam('complex', 1-current);
    }
};


$(document).ready(function(){

    // set url param if not set
    let complex = parseInt(getURLParam('complex', 0, true))
    if (complex) {
        // turn on visibility, but don't change url as it's already how we want it
        toggleVisibility('togglecomplex', false);
    }

});