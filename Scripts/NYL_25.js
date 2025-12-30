document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
    loadLetter();
});

function fadeNavigate(url) {
    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = url;
    }, 600);
}

async function loadLetter() {
    const code = localStorage.getItem('accessCode');
    if (!code) return;

    try {
        const response = await fetch('../JSON/nym.json');
        const data = await response.json();

        const userMessage = data.new_year_messages.find(
            msg => msg.code === code
        );

        if (!userMessage) {
            localStorage.removeItem('accessCode');
            fadeNavigate('../index.html');
            return;
        }

        document.getElementById('welcomeText').textContent =
            `Welcome to 2026 ${userMessage.name}!`;

        document.getElementById('messageContent').textContent =
            userMessage.NYL25;

    } catch (err) {
        console.error(err);
    }
}

function goBack() {
    localStorage.removeItem('accessCode');
    fadeNavigate('../index.html');
}
