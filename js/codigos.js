carruselBanner();

function carruselBanner() {
    document.querySelector("#banner").style.opacity="0";
    document.querySelector("#banner").style.transition="all 1s";
    
    setTimeout("cambioBanner()",700);
}

var c=1;

function cambioBanner(){
    c++;
    if(c>11){c=1;}
    document.querySelector("#banner").setAttribute("src","../image/banner"+ c +".jpg");
    
    document.querySelector("#banner").style.opacity="1";
    document.querySelector("#banner").style.transition="all 1s";

    setTimeout("carruselBanner()",3500);
}

document.body.setAttribute("onload","carruselBanner()");

