fetch('modules/nav.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
        })
        .catch(err => console.error('Failed to load navbar:', err));