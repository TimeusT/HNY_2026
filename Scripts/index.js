function checkCode() {
    const input = document.getElementById('codeInput').value.toUpperCase().trim();
    const errorMessage = document.getElementById('errorMessage');
    
    if (input) {
        // Store the code and redirect to letter page
        localStorage.setItem('accessCode', input);
        window.location.href = 'letter.html';
    } else {
        errorMessage.textContent = 'Please enter a code';
    }
}

// Allow Enter key to submit
document.getElementById('codeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});