document.addEventListener("DOMContentLoaded", function() {
    fetch('menuPage.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforebegin", data);
        });
});

