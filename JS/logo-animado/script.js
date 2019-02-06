window.onscroll = function () {
    scroll();
}

var sticky = document.getElementById("navigation");
var sticky = navigation.offsetTop;

function scroll() {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky");
    }
    else {
        navigation.classList.remove("sticky");
    }
}