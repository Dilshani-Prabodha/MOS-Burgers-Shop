document.getElementById('paymentBtn').addEventListener('click', function() {
    const customerId = document.getElementById('customerId').value;
    const payment = document.getElementById('payment').value;

    if (customerId === '' || payment === '') {
        alert('Please enter both Customer ID and Payment Amount');
        return;
    }

    const currentDateTime = new Date();
    const date = currentDateTime.toLocaleDateString();
    const time = currentDateTime.toLocaleTimeString();

    // Create new row for order record
    const orderDetails = document.getElementById('orderDetails');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${customerId}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>$${payment}</td>
        <td><input type="checkbox" class="paid-checkbox"></td>
    `;

    orderDetails.appendChild(newRow);

    // Show the order record section
    document.getElementById('order-record').classList.remove('hidden');

    // Clear the input fields
    document.getElementById('customerId').value = '';
    document.getElementById('payment').value = '';
});
