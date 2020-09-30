
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

function buyMultiplier() {
    if (clickCount >= ((multiplier + 1) * 100)) {
        clickCount = clickCount - ((multiplier + 1) * 100);
        multiplier = multiplier + 1;
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

    document.getElementById("ammountMultiplier").innerHTML = "Kertoja Päivitys x" + (multiplier + 1)
    document.getElementById("ammountMultiplier2").innerHTML = "x" + (multiplier + 1);
    document.getElementById("costMultiplier").innerHTML = ((multiplier + 1) * 100) + " Pistettä";
    document.getElementById("currentMultiplier").innerHTML = "Tämänhetkinen Kertoja on x" + (multiplier);

}

function timer() {
    clickCount = clickCount + autoClick * multiplier;
    clickCount = clickCount + shelter * 2 * multiplier;
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
    localStorage.setItem("multiplier", multiplier);

}
function load() {
    clickCount = localStorage.getItem("clickCount");
    clickCount = parseInt(clickCount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    shelter = localStorage.getItem("shelter");
    shelter = parseInt(shelter);
    multiplier = localStorage.getItem("multiplier");
    multiplier = parseInt(multiplier);
    update()
}