let isHamburgerClicked = false;

const hamburger = document.getElementById("toggle")
const links_mobile = document.getElementById("links_mobile")

hamburger.addEventListener("click", function() {
    isHamburgerClicked = !isHamburgerClicked
    links_mobile.style.display = isHamburgerClicked ? 'block' : 'none';
})