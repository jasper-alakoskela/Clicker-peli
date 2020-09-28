
let clickCount = 0;
let autoClick = 0;

//Upgrades

function buyAutoClick() {
    if (clickCount >= ((autoClick + 1) * 12)) {
        clickCount = clickCount - ((autoClick + 1) * 12);
        autoClick = autoClick + 1;
        update()
    }
}

function update() {
    document.getElementById("score").value = clickCount;
    document.title = clickCount + " Pistettä";
    document.getElementById("ammountAutoClick").innerHTML = "Sinulla on " + autoClick + " Auto näpäytintä";
    document.getElementById("costAutoClick").innerHTML = ((autoClick + 1) * 12) + " Pistettä";
}

function timer() {
    clickCount = clickCount + autoClick;
    update()
}

setInterval(timer, 3000)


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
}
function load() {
    clickCount = localStorage.getItem("clickCount");
    clickCount = parseInt(clickCount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    update()
}