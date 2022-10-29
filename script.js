
let moon = document.getElementById("moon");
let title = document.getElementById("title");
let logo = document.getElementById("logo");
let la = document.getElementById("la");
let lx = document.getElementById("lx");
let le = document.getElementById("le");
let ln = document.getElementById("ln");
let lc = document.getElementById("lc");
let le1 = document.getElementById("le1");
let mountain = document.getElementById("mountain");
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
var france = document.getElementById("france")

window.addEventListener("scroll", function(){
    var value = window.scrollY;
    moon.style.left = value * 0.5 + "px";
    logo.style.left = -value * 0.5 + "px";
    la.style.top = -value * 0.4 + "px";
    lx.style.top = value * 0.4 + "px";
    le.style.top = value * 1 + "px";
    ln.style.top = value * 1 + "px";
    lc.style.top = -value * 1 + "px";
    le1.style.top = value * 0.8 + "px";
    title.style.top = -value * 0.2 + "px";
    mountain.style.top = value * 0.3 + "px";
    title1.style.top = -value * 0.4 + "px";
    title2.style.top = -value * 0.6 + "px";
    france.style.left = -value * 1 + "px";
});

