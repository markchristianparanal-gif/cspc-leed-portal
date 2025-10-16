// Basic client-side logic for CSPC CEA LEED Assessment Portal
// Admin credentials (set in plain JS for demo/prototype only)
const ADMIN_USER = 'nonidaryll';
const ADMIN_PASS = 'aldriekhim1234';

// Simple login (demo only — not secure)
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    alert('Incorrect login credentials.');
  }
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
}

// Save data from data.html form
function saveData() {
  const energy = Number(document.getElementById('energy').value || 0);
  const water = Number(document.getElementById('water').value || 0);
  const air = Number(document.getElementById('air').value || 0);

  localStorage.setItem('energy', energy);
  localStorage.setItem('water', water);
  localStorage.setItem('air', air);

  document.getElementById('savedMsg').innerText = 'Data saved locally. Go to Dashboard or Report to view results.';
}

// Protect pages (very simple)
(function protectPages() {
  const path = window.location.pathname.split('/').pop();
  const protectedPages = ['dashboard.html', 'data.html', 'report.html'];
  if (protectedPages.includes(path)) {
    const logged = localStorage.getItem('loggedIn');
    if (!logged) {
      window.location.href = 'index.html';
    }
  }
})();
