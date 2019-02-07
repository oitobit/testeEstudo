var sticky = document.getElementById("panel");
var sticky = panel.offsetTop;

window.onscroll = function () {
    myScroll();
}

function myScroll () {
    if (window.pageYOffset >= sticky) {
        panel.classList.add("sticky");
    }
    else {
        panel.classList.remove("sticky");
    }
}