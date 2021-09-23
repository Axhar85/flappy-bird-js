var charcter = document.getElementById("charcter");
var block = document.getElementById("block");
function jump(){
    charcter.classList.add("animate")
    setTimeout(function(){
        charcter.classList.remove("animate")
    },500);
}