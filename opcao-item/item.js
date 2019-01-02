
function openNav () {
    let menu = document.getElementById("container");
    let btn = document.getElementById("btn")

    btn.addEventListener("click", function () {
        btn.classList.add("color");
    })

    if (menu.style.display === "block") {
        menu.style.display = "none";
    }

    else {
        menu.style.display = "block";
    }
}