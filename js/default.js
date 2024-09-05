const BUFFER = 40;

const navLinks = document.querySelectorAll('div[class^="navLink"]:not([class*="1"],[class*="2"])');
const pageLogo = document.getElementById("pageLogo");

function toggleNavMenu() {
    const navMenu = document.getElementById("navMenu");

    if (navMenu.style.visibility == "visible") {
        navMenu.style.opacity = "0%";
        navMenu.style.visibility = "hidden";
    } else {
        navMenu.style.opacity = "100%";
        navMenu.style.visibility = "visible";
    }
};

navLinks.forEach( (navLink) => {
    navLink.addEventListener("click", e => {
        alert("This would navigate");
    });
});
pageLogo.style.cursor = "pointer";

function navInstagram(instaURL) {
    window.location.href = instaURL;
};

window.addEventListener('scroll', e => {
    const navBar = document.getElementById("navBar");
    const scrollHeight = window.scrollY || document.body.scrollTop || 0;

    navBar.style.transform  = 
        (scrollHeight >= (navBar.offsetHeight+BUFFER))?
            (navBar.style.transform = `translateY(${-navBar.offsetHeight}px)`):
            ("none");
});
pageLogo.addEventListener("click", e => {
    window.location.href = "../index.html";
});