let iconHamburger = document.getElementById("icon-hamburger");
let hamburgerMenu = document.getElementById("hamburger-menu");
let triangle = document.getElementById("triangle");
let isOpen = false;

iconHamburger.addEventListener("click", function() {
    if (isOpen) {
        hamburgerMenu.style.display = "none";
        triangle.style.display = "none";
        isOpen = false;
    } else {
        hamburgerMenu.style.display = "block";
        triangle.style.display = "block";
        isOpen = true;
    }
})