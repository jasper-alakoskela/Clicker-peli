
let clickCount = 0;
let autoClick = 0;
let shelter = 0;
let multiplier = 1;

//Upgrades

function buyAutoClick() {
    if (clickCount >= ((autoClick + 1) * 12)) {
        clickCount = clickCount - ((autoClick + 1) * 12);
        autoClick = autoClick + 1;
        update()
    }
}

function buyShelter() {
    if (clickCount >= ((shelter + 1) * 15)) {
        clickCount = clickCount - ((shelter + 1) * 15);
        shelter = shelter + 1;
        update()
    }
}

function update() {
    document.getElementById("score").value = clickCount;
    document.title = clickCount + " Pistettä";

    document.getElementById("ammountAutoClick").innerHTML = "Sinulla on " + autoClick + " Auto näpäytintä";
    document.getElementById("costAutoClick").innerHTML = ((autoClick + 1) * 12) + " Pistettä";

    document.getElementById("ammountShelter").innerHTML = "Sinulla on " + shelter + " Eläinhoitolaa";
    document.getElementById("costShelter").innerHTML = ((shelter + 1) * 15) + " Pistettä";

    document.getElementById("clickspersecond").innerHTML = "Saat " + (((autoClick) + (shelter * 2)) * multiplier) + " Pistettä per/s";
}

function timer() {
    clickCount = clickCount + autoClick;
    clickCount = clickCount + shelter * 2;
    update()
}

setInterval(timer, 1000)


//kuvat

function rollOver(my_image) {

    my_image.src = 'img/scaredcat.png';

}

function mouseAway(my_image) {

    my_image.src = "img/cat.png";

}

function mouseClick(my_image) {
    my_image.src = "img/angrycat.png";
}

//lisäys, tallentaminen ja lataaminen

function add() {
    clickCount = clickCount + 1;
    update()
}

function save() {
    localStorage.setItem("clickCount", clickCount);
    localStorage.setItem("autoClick", autoClick);
    localStorage.setItem("shelter", shelter);

}
function load() {
    clickCount = localStorage.getItem("clickCount");
    clickCount = parseInt(clickCount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    shelter = localStorage.getItem("shelter");
    shelter = parseInt(shelter);
    update()
}