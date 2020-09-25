window.addEventListener("scroll", (e) => {
    const siteHeader = document.getElementById("site-header");
    siteHeader.style.backgroundOrigin = -window.scrollY + "px";
    /* scroll navigation */
    scrollNav();
    /* scroll to load */
    scrollTL();
    /*Skill */
    skillBar();



});

function scrollNav() {
    const navigation = document.querySelector(".navigation");
    if (window.scrollY > 100) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function skillBar() {
    let time = 2000;
    if (window.innerWidth > 680) {
        time = 3500;
    }
    const skill = document.querySelectorAll(".skill");
    if (document.querySelector(".skilll").classList[2] == "animate-running") {
        skill.forEach(e => {
            let skillValue = e.getAttribute("skill");
            e.children[1].innerHTML = skillValue + "%";
            setTimeout((event) => {
                e.children[1].style.left = skillValue + "%";
                e.children[1].style.transitionDuration = skillValue / 100 + "s";
                e.children[0].style.width = skillValue + "%";
                e.children[0].style.transitionDuration = skillValue / 100 + "s";
            }, time);

        });

    }
}
window.onload = function() {
    scrollNav();
    scrollTL();
    skillBar();
    const iconBar = document.querySelector(".icon-bar");
    const snav = document.querySelector(".snav");
    iconBar.addEventListener("click", function() {
        iconBar.classList.toggle("active");
        snav.classList.toggle("active");
    });



}