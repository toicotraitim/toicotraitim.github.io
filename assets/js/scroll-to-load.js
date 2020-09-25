/* scroll to load */

function scrollTL() {
    let top = window.scrollY + window.innerHeight;
    let bottom = window.scrollY;
    const scrollToLoad = document.querySelectorAll(".animate-paused");
    scrollToLoad.forEach(function(e) {
        if (top > e.offsetTop && bottom < e.offsetTop + e.offsetHeight) {
            e.classList.add("animate-running");
        }
    });
}