// Theme Toggle Script
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Fake Power-Off Button
const fakePowerBtn = document.getElementById('fakePowerBtn');
fakePowerBtn.addEventListener('click', () => {
    alert('Fake Power Off Activated. Tracking continues in the background.');
});

// Login Form Submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Login successful');
    } else {
        alert('Invalid credentials');
    }
});

// Sign Up Button
const signupBtn = document.getElementById('signupBtn');
signupBtn.addEventListener('click', () => {
    window.location.href = 'signup.html';  // Redirect to signup page
});
