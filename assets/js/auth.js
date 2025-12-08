
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname;

    
    if (isLoggedIn !== 'true' && !currentPage.includes('login.html') && !currentPage.includes('index.html') && currentPage !== '/') {
        window.location.href = 'login.html';
    }
}

function logout() {
    
    if (confirm('Are you sure you want to logout?')) {
        
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');

        window.location.href = 'login.html';
    }
}

checkAuth();
