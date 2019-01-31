window.onscroll = function() {
    controle() ;
};

function controle() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("container").style.display = "block";
    }

    else {
        document.getElementById("container").style.display = "none";
    }
}

function topControle() {
    document.documentElement.scrollTop = 0;
}

