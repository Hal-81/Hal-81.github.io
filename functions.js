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

document.addEventListener('DOMContentLoaded', function () {
    // Show the pop-up when the page loads
    showPopup();
});

function showPopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'flex';
}

function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
}