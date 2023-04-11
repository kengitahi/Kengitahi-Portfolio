console.log("Main js added");

const openMenu = document.getElementById("toggleMenuOpen");
const closeMenu = document.getElementById("toggleMenuClose");
const mainNav = document.getElementById("mainNav");

openMenu.addEventListener("click", showTheMenu);
function showTheMenu() {
    if (mainNav.classList.contains("hidden")) {
        mainNav.classList.remove("hidden");
    }
    openMenu.classList.add("hidden");
}

closeMenu.addEventListener("click", hideTheMenu);
function hideTheMenu() {
    if (openMenu.classList.contains("hidden")) {
        openMenu.classList.remove("hidden");
    }
    mainNav.classList.add("hidden");
}

