const form = document.querySelector('form');
const message = document.querySelector('p');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    hideMessage();

    const formData = new FormData(form);
    const { username, email, password, 'confirm-password':confirmPassword } = Object.fromEntries(formData);
    console.log(username,'-',email,'-',password,'-',confirmPassword)
    if (!username || !email || !password || !confirmPassword) {
        showError("Missing some values, please try again!");
        return;
    }

    if (password !== confirmPassword) {
        showError("Password and confirm do not match, check again.");
        return;
    }

    showSuccess("Your data is complete.");
});

function showError(msg) {
    message.style.color = 'red';
    message.textContent = msg;
}

function showSuccess(msg) {
    message.style.color = 'green';
    message.textContent = msg;
}

function hideMessage() {
    message.textContent = '';
    message.style.color = '';
}
