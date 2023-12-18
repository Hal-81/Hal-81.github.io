setInterval(showNumber,1);

var number = 0;

function add() {
    number++;
}

function lower() {
    number--;
}

function showNumber() {
    document.getElementById("number").innerHTML = number;
}
