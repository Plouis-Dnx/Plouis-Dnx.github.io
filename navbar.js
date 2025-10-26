fetch("navbar.html").then(response => response.text())
.then(navbar => {
    document.getElementById("navbar").innerHTML = navbar;
});