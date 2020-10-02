
let clickCount = 0;
let click = 0;
let spray = 0;
let dog = 0;
let multiplier = 1;

//Upgrades

function buyClick() {
    if (clickCount >= ((click + 1) * 30)) {
        clickCount = clickCount - ((click + 1) * 30);
        click = click + 1;
        update()
    }
}

function buySpray() {
    if (clickCount >= ((spray + 1) * 100)) {
        clickCount = clickCount - ((spray + 1) * 100);
        spray = spray + 1;
        update()
    }
}

function buyDog() {
    if (clickCount >= ((dog + 1) * 500)) {
        clickCount = clickCount - ((dog + 1) * 500);
        dog = dog + 1;
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

    document.getElementById("ammountClick").innerHTML = "Sinulla on " + click + " Näpäyttäjää";
    document.getElementById("costClick").innerHTML = ((click + 1) * 30) + " Pistettä";

    document.getElementById("ammountSpray").innerHTML = "Sinulla on " + spray + " Suihketta";
    document.getElementById("costSpray").innerHTML = ((spray + 1) * 100) + " Pistettä";

    document.getElementById("ammountDog").innerHTML = "Sinulla on " + dog + " Koiraa";
    document.getElementById("costDog").innerHTML = ((dog + 1) * 500) + " Pistettä";

    document.getElementById("clickspersecond").innerHTML = "Saat " + (((click) + (spray * 5) + (dog * 10)) * multiplier) + " Pistettä per/s";

    document.getElementById("ammountMultiplier").innerHTML = "Kertoja Päivitys x" + (multiplier + 1)
    document.getElementById("ammountMultiplier2").innerHTML = "x" + (multiplier + 1);
    document.getElementById("costMultiplier").innerHTML = ((multiplier + 1) * 100) + " Pistettä";
    document.getElementById("currentMultiplier").innerHTML = "Tämänhetkinen Kertoja on x" + (multiplier);

}

function timer() {
    clickCount = clickCount + click * multiplier;
    clickCount = clickCount + spray * 5 * multiplier;
    clickCount = clickCount + dog * 10 * multiplier;
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
    localStorage.setItem("click", click);
    localStorage.setItem("spray", spray);
    localStorage.setItem("dog", dog);
    localStorage.setItem("multiplier", multiplier);

}
function load() {
    clickCount = localStorage.getItem("clickCount");
    clickCount = parseInt(clickCount);
    click = localStorage.getItem("click");
    click = parseInt(click);
    spray = localStorage.getItem("spray");
    spray = parseInt(spray);
    dog = localStorage.getItem("dog");
    dog = parseInt(dog);
    multiplier = localStorage.getItem("multiplier");
    multiplier = parseInt(multiplier);
    update()
}