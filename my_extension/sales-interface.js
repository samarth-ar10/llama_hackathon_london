// sales-interface.js

// Create a sales interface container
const salesInterface = document.createElement('div');
salesInterface.id = 'sales-interface';
salesInterface.classList.add('sales-interface');

// Add your sales interface elements here
const salesButton = document.createElement('button');
salesButton.innerText = 'Buy Now';
salesButton.classList.add('sales-button');
salesButton.addEventListener('click', () => {
    alert('Sales button clicked!');
});
salesInterface.appendChild(salesButton);

export default salesInterface;