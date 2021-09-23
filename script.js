var charcter = document.getElementById("charcter");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){ 
    character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500);
}

// check if chracter is dead or not set 10s interval of time
var checkDead = setInterval(function(){
    var characterTop = parseInt
    (window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft = parseInt
    (window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop >=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("you lose");
    }
}, 10);