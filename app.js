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
