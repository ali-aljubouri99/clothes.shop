let minu = document.getElementById("minu");
let exit = document.getElementById("exit");
let nav = document.getElementsByTagName("nav")[0];

minu.addEventListener("click", function() {
    nav.style.cssText = "display: flex";
    minu.style.cssText = "display: none";
    exit.style.cssText = "display: flex" 
});

exit.addEventListener("click", function() {
    nav.style.cssText = "display: hidden";
    exit.style.cssText = "display: none";
    minu.style.cssText = "display: flex" 
})