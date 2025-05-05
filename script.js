document.getElementById("toggleBtn").addEventListener("click", function() {
    let infoBox = document.getElementById("infoBox");
    infoBox.style.display = (infoBox.style.display === "none") ? "block" : "none";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password.length < 8) {
        alert("Please fill out all fields correctly!");
        event.preventDefault();
    }
});