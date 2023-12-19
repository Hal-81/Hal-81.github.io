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
// ___________________________________________________________________________________________________________________

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
// ___________________________________________________________________________________________________________________

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and menu
    var toggleButton = document.getElementById('toggleButton');
    var dividers = document.getElementById('navbar');
    var reopen = document.getElementById('reopen');

    // Toggle menu visibility on button click
    toggleButton.addEventListener('click', function() {
        dividers.classList.toggle('closed');
        reopen.style.display = 'block';
    });

    // Reopen menu on click
    reopen.addEventListener('click', function() {
        dividers.classList.remove('closed');
        setTimeout(function() {
            reopen.style.display = 'none';
        }, 600)
    });
});