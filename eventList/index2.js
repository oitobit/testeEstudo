var cont = document.getElementById("btn");
var x = document.getElementById("p1");

/* add new style to element: color and cursor */
cont.addEventListener("click", myFunction);
function myFunction () {
    document.getElementById("p1").style.color = "red";
    document.getElementById("p1").style.cursor = "pointer";
}

/* add one new class: active */
x.addEventListener("click", function () {
    x.classList.add("active");
})
