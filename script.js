const affe = document.getElementById("affe")
const holz = document.getElementById("holz")

function jump(){

    if(affe.classList != "jump"){
    affe.classList.add("jump");

    setTimeout(function(){
        affe.classList.remove("jump");
    },300);
}
}

letisAlive = setInterval(function(){
    let affeTop = parseInt(window.getComputedStyle(affe). getPropertyValue("top"));
    let holzLeft = parseInt(window.getComputedStyle(holz).getPropertyValue("left"));

    if(holzLeft<38 && holzLeft > 0 && affeTop >= 140){
        alert("Game Over!")
    }
})

document.addEventListener("keydown", function(event){
    jump();
});


