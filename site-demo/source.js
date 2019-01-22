window.onscroll = function() {
    controle();
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
