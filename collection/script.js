function myColor () {
    var paragraph = document.getElementsByTagName("p");
    for (var i = 0; i < paragraph.length; i++) {
        paragraph[i].style.color = "red";
    }
}

var x = document.getElementById("p");
x.style.color = "blue";
x.style.cursor = "pointer";
x.addEventListener("click", function () {
    if (x.style.color == "blue") {
        x.style.color = "green";
    }
    else {
        x.style.color = "blue";
    }
})

