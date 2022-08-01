function onMouseOver(e) {
    var getSvgIn = document.getElementById('innerWheel');
    getSvgIn.classList.add('innerwheelClass');
    var getSvgOut = document.getElementById('outerWheel');
    getSvgOut.classList.add('outerWheelClass');
    var getFace = document.getElementById('face');
    getFace.classList.add('faceClass');
    var getHair = document.getElementById('hair');
    getHair.classList.add('hairClass');
}

function onMouseOut() {
    var getSvgIn = document.getElementById('innerWheel');
    getSvgIn.classList.remove('innerwheelClass');
    var getSvgOut = document.getElementById('outerWheel');
    getSvgOut.classList.remove('outerWheelClass');
    var getFace = document.getElementById('face');
    getFace.classList.remove('faceClass');
    var getHair = document.getElementById('hair');
    getHair.classList.remove('hairClass');
}

document.getElementsByClassName("svg")[0].addEventListener("mouseover", onMouseOver);

document.getElementsByClassName("svg")[0].addEventListener("mouseout", onMouseOut);

document.getElementsByTagName("h1")[0].addEventListener("mouseover", onMouseOver);

document.getElementsByTagName("h1")[0].addEventListener("mouseout", onMouseOut);
