const BUFFER = 40;

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

const navLinks = document.querySelectorAll('div[class^="navLink"]:not([class*="1"],[class*="2"])');
console.log(navLinks);
navLinks.forEach( (navLink) => {
    navLink.addEventListener("click", e => {
        alert("This would navigate");
    });
});

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