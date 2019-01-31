// function topcontrole
window.onscroll = function() {
    controle();
    myFunction();
}

function controle() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("btn").style.display = "block";
    }
    else {
        document.getElementById("btn").style.display = "none";
    }
}

function topcontrole() {
    document.documentElement.scrollTop = 0;
}

// navbar sticky
var sticky = document.getElementById("menu");
var sticky = menu.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky")
    } else {
    menu.classList.remove("sticky");
    }
}