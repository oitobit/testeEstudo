function clique () {
    var repeat = document.getElementsByTagName("p");
    var text = "";
    for (i = 0; i < 3; i++) {
        text += document.getElementById("demo").innerHTML = repeat[0].innerHTML;
    }
    document.getElementById("demo").innerHTML = text;
}

