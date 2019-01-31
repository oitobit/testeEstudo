function funcaoSomar () {
    var som1 = parseInt(document.getElementById("som1").value);
    var som2 = parseInt(document.getElementById("som2").value);
    var res = som1 + som2;

    document.getElementById("resultado").innerHTML = res;
}

function funcaoMulti () {
    var mult1 = parseInt(document.getElementById("mult1").value);
    var mult2 = parseInt(document.getElementById("mult2").value);
    var multiplicar = mult1 * mult2;

    document.getElementById("exibir").innerHTML = multiplicar;

    switch (multiplicar) {
        case 6:
            document.getElementById("exibir").style.color = "red";
            break;
    }
}