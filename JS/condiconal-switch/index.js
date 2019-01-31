var show = 0;

switch (show) {
    case 0:
        document.getElementById("demo").innerHTML = "Paragrafo exibido na cor azul";
        document.getElementById("demo").style.color = "blue";
        break;
    default:
        document.getElementById("demo").innerHTML = "Paragrafo exibido na cor vermelha";
        document.getElementById("demo").style.color = "red";
}



var elem = document.getElementsByTagName("p");
var text = "";
for (i = 0; i < 11; i ++) {
    text += document.getElementById("mostrar").innerHTML = "<br>" + elem[1].innerHTML;
}
document.getElementById("mostrar").innerHTML = text;

switch (i) {
    case 11:
        document.getElementById("mostrar").style.color = "red";
        break;
}