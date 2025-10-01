// Function to check if user is authenticated (for other pages)
function isAuthenticated() {
    const authenticated = localStorage.getItem('authenticated');
    const loginTime = localStorage.getItem('loginTime');
    
    if (!authenticated || !loginTime) {
        return false;
    }
    
    // Check if login is still valid (24 hours)
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const now = Date.now();
    const timeSinceLogin = now - parseInt(loginTime);
    
    if (timeSinceLogin > twentyFourHours) {
        // Session expired
        logout();
        return false;
    }
    
    return true;
}

// Function to logout
function logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('loginTime');
    // Only redirect if not already on login page
    if (!window.location.pathname.includes('login.html')) {
        window.location.href = '/login.html';
    }
}

// Function to protect pages (call this on pages that require authentication)
function requireAuthentication() {
    // Don't check authentication on login page
    if (window.location.pathname.includes('login.html')) {
        return;
    }
    
    if (!isAuthenticated()) {
        // Store the current page to redirect back after login
        localStorage.setItem('redirectAfterLogin', window.location.pathname);
        window.location.href = '/login.html';
    }
}

// Run authentication check immediately (synchronously) when script loads
requireAuthentication();

document.addEventListener('DOMContentLoaded', () => {
    // Only run login form code if we're on the login page
    if (window.location.pathname.includes('login.html')) {
        const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const loginButton = document.getElementById('loginButton');
        const errorMessage = document.getElementById('errorMessage');
        const currentYearSpan = document.getElementById('currentYear');

        // Set current year
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }

        // Show/Hide password functionality
        const passwordToggle = document.getElementById('passwordToggle');
        
        if (passwordToggle && passwordInput) {
            passwordToggle.addEventListener('click', () => {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                // Toggle icon
                const eyeIcon = passwordToggle.querySelector('i');
                if (type === 'text') {
                    eyeIcon.setAttribute('data-lucide', 'eye-off');
                } else {
                    eyeIcon.setAttribute('data-lucide', 'eye');
                }
                
                // Reinitialize lucide icons
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            });
        }

        // Authentication credentials
        const VALID_PASSWORD = 'Qq123123@';
        const VALID_USERNAME = 'digitalshovel';

        // Handle form submission
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const username = usernameInput.value.trim();
                const password = passwordInput.value;

                // Hide previous error messages
                errorMessage.classList.remove('show');
                
                // Disable button during authentication
                loginButton.disabled = true;
                loginButton.textContent = 'Signing In...';

                // Simulate authentication delay
                setTimeout(() => {
                    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                        // Successful authentication
                        localStorage.setItem('authenticated', 'true');
                        localStorage.setItem('loginTime', Date.now().toString());
                        
                        // Check if there's a redirect URL stored
                        const redirectUrl = localStorage.getItem('redirectAfterLogin');
                        localStorage.removeItem('redirectAfterLogin');
                        
                        // Redirect to original page or homepage
                        if (redirectUrl && redirectUrl !== '/login.html') {
                            window.location.href = redirectUrl;
                        } else {
                            window.location.href = '/index.html';
                        }
                    } else {
                        // Failed authentication
                        errorMessage.classList.add('show');
                        passwordInput.value = ''; // Clear password field
                        passwordInput.focus();
                        
                        // Re-enable button
                        loginButton.disabled = false;
                        loginButton.textContent = 'Sign In';
                        
                        // Shake animation for error
                        loginForm.style.animation = 'shake 0.5s ease-in-out';
                        setTimeout(() => {
                            loginForm.style.animation = '';
                        }, 500);
                    }
                }, 1000);
            });
        }

        // Enter key handling
        [usernameInput, passwordInput].forEach(input => {
            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        loginForm.dispatchEvent(new Event('submit'));
                    }
                });
            }
        });

        // Clear error message when user starts typing
        [usernameInput, passwordInput].forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    errorMessage.classList.remove('show');
                });
            }
        });

        // Add shake animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
                20%, 40%, 60%, 80% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);
    }

    // Add page visibility and focus event listeners for authentication checks
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && !window.location.pathname.includes('login.html')) {
            if (!isAuthenticated()) {
                localStorage.setItem('redirectAfterLogin', window.location.pathname);
                window.location.href = '/login.html';
            }
        }
    });

    // Check authentication when window gains focus
    window.addEventListener('focus', () => {
        if (!window.location.pathname.includes('login.html')) {
            if (!isAuthenticated()) {
                localStorage.setItem('redirectAfterLogin', window.location.pathname);
                window.location.href = '/login.html';
            }
        }
    });
});