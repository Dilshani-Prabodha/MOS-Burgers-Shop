// Dummy credentials for login
const users = {
    'admin': 'admin123',
    'employee': 'employee123'
};

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] === password) {
        if (username === 'admin') {
            window.location.href = './admin_interface.html';
        } else {
            window.location.href = './cashier_interface.html';
        }
    } else {
        alert('Invalid credentials');
    }
}

function btnHomeOnAction(){
    window.location.assign('./index.html');
    console.log("Helo");

  // window.location.href = 'index.html';
}

function btnAddCustomerOnAction(){
    window.location.assign('./add_customer_form.html');
}

function btnViewCustomerOnAction(){
    window.location.assign('./view_customer_form.html');
}

function btnUpdateCustomerOnAction(){
    window.location.assign('./update_customer.html');
}

function btnDeleteCustomerOnAction(){
    window.location.assign('./delete_customer_form.html');
}

function btnHistoryCustomerOnAction(){
    window.location.assign('./history_customer_form.html');
}

function btnViewListOnAction(){
    window.location.assign('./view_customer_List.html');
}

function btnAddNewCustomerOnAction(){
    window.location.assign('./add_customer_form.html');
}

function btnNewCustomerOnAction(){
    window.location.assign('./Menu_Burger.html');
}

function btnCustomerManagementOnAction(){
    window.location.assign('./add_customers.html');
}
function btnMemberCustomerOnAction(){
    window.location.assign('./add_customers.html');
}




// //Login credentials and navigation functions remain the same...

// //Function for handling new customer order
// function btnNewCustomerOnAction() {
//     // Prompt for customer name
//     const newCustomerName = prompt("Please enter your name:");

//     // Ensure the user entered a name
//     if (newCustomerName && newCustomerName.trim() !== "") {
//         // Redirect to menu page (or another page as needed)
//         window.location.assign('./Menu_Burger.html');
        
//         // Store the name in localStorage so it can be used across pages
//         localStorage.setItem("newCustomerName", newCustomerName);

//     } else {
//         alert("No name entered. Please try again.");
//     }
// }

// // Function to dynamically change the cart title
// function updateCartTitle() {
//     const customerName = localStorage.getItem("newCustomerName");
//     if (customerName) {
//         const cartTitle = document.querySelector("card-title");
//         cartTitle.innerHTML = `<i class="fas fa-shopping-cart"></i> ${customerName}'s Cart`;
//     }
// }

// // When the page loads, check if a customer name is stored
// window.onload = function () {
//     updateCartTitle();
//     displayProducts(); // Assuming this function exists to display the products
//     displayCart();     // Assuming this function exists to display the cart items
// };


