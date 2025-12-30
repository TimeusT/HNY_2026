async function checkCode() {
    const input = document
        .getElementById('codeInput')
        .value
        .toUpperCase()
        .trim();

    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';

    if (!input) {
        errorMessage.textContent = 'Please enter a code';
        return;
    }

    try {
        const response = await fetch('../JSON/nym.json');
        const data = await response.json();

        const match = data.new_year_messages.find(
            msg => msg.code === input
        );

        if (!match) {
            errorMessage.textContent =
                'Are you sure your secret code is correct?';
            return;
        }

        // ✅ Valid code
        localStorage.setItem('accessCode', input);
        fadeNavigate('Pages/nyl_25.html');

    } catch (err) {
        console.error(err);
        errorMessage.textContent = 'Something went wrong. Try again.';
    }
}
