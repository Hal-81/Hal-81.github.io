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
// ___________________________________________________________________________________________________________________

var totalPrice = 0;
function calculateTotalAndRedirect() {
    var button = event.target;
    var individualPrice = button.getAttribute('data-price');


    totalPrice += parseFloat(individualPrice);
    document.getElementById("totalAmount").innerHTML = "total: Rp" + totalPrice;

        // Save the updated total to sessionStorage
        sessionStorage.setItem('totalAmount', totalPrice);

        // Redirect to the payment page
}

function showCart() {
    var button = event.target;
    var price = button.getAttribute('data-price');
    var dataName = button.getAttribute('data-name');

    var paragraph = document.createElement('p');

    // Set the content of the paragraph
    paragraph.textContent = dataName + ' Rp' + price;
    paragraph.style.fontSize = '0.6em';
    paragraph.style.margin = '1px';

    // Append the paragraph to the cartPopup element
    document.getElementById("cartPopup").appendChild(paragraph);
}

function clearCart() {
    document.getElementById("totalAmount").innerHTML = "Total: 0"
    document.getElementById("cartPopup").innerHTML = ''
}

function showSuccessAlert() {
    // Create an alert element
    var alertElement = document.createElement('div');
    alertElement.className = 'alert alert-success position-fixed top-0 end-0';
    alertElement.setAttribute('role', 'alert');
    alertElement.innerHTML = 'Item bought successfully!';
  
    // Append the alert to the body
    document.body.appendChild(alertElement);
  
    // Set a timeout to remove the alert after 2 seconds
    setTimeout(function() {
      alertElement.remove();
    }, 2000);
  }
  

