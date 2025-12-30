async function loadLetter() {
    const code = localStorage.getItem('accessCode');
    
    if (!code) {
        // No code found, redirect back to index
        window.location.href = 'index.html';
        return;
    }

    try {
        // Load the messages from JSON file
        const response = await fetch('messages.json');
        const data = await response.json();
        
        // Find the message for this code
        const userMessage = data.messages.find(msg => msg.code === code);
        
        if (userMessage) {
            // Display the personalized message
            document.getElementById('welcomeText').textContent = `Welcome to 2026 ${userMessage.name}!`;
            document.getElementById('messageContent').textContent = userMessage.NYL25;
        } else {
            // Invalid code, redirect back with error
            localStorage.removeItem('accessCode');
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Error loading messages:', error);
        window.location.href = 'index.html';
    }
}

function goBack() {
    localStorage.removeItem('accessCode');
    window.location.href = 'index.html';
}

// Load the letter when page loads
loadLetter();