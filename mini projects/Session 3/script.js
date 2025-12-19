// 1. select the elements
const statusLabel = document.getElementById('statusLabel');
const toggleBtn = document.getElementById('toggleBtn');

// 2. add an event listener for the click action
toggleBtn.addEventListener('click', function() {
    
    // 3. logic: Check current state and toggle
    if (statusLabel.textContent === 'OFF') {
        statusLabel.textContent = 'ON';
        statusLabel.style.color = '#28a745'; // Optional: Change color to green
    } else {
        statusLabel.textContent = 'OFF';
        statusLabel.style.color = '#333';    // Reset to dark grey
    }
});
