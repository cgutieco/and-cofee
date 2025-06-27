document.addEventListener('DOMContentLoaded', function() {
    fetch('footerPage.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });
});
