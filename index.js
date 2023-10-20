function clicked(top, shadow, i) {
    document.querySelectorAll(".drum")[i].style.top = top;
    document.querySelectorAll(".drum")[i].style.boxShadow = shadow;
}
function sounds() {
    return [
        new Audio("sounds/crash.mp3"), new Audio("sounds/kick-bass.mp3"), 
        new Audio("sounds/snare.mp3"), new Audio("sounds/tom-1.mp3"),
        new Audio("sounds/tom-2.mp3"), new Audio("sounds/tom-3.mp3"),
        new Audio("sounds/tom-4.mp3")];
}
for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".set > div")[i].addEventListener("click", function () {
        sounds()[i].play();
        clicked("5px", "0px 0px #E900FF", i);
        setTimeout(() => clicked("0px", "0px 5px #E900FF", i), 100);
    })
}
let keyPressed = false;
document.addEventListener("keydown", function(event) {
    let allKey = ["w", "a", "s", "d", "j", "k", "l"];
    if (keyPressed === false) {
        keyPressed = true;
        for (let i of allKey) {
            if (event.key === i || event.key === i.toUpperCase()) {
                sounds()[allKey.indexOf(i)].play();
                clicked("5px", "0px 0px #E900FF", allKey.indexOf(i));
                setTimeout(() => clicked("0px", "0px 5px #E900FF", allKey.indexOf(i)), 100);
            }
        }
    }
})
document.addEventListener("keyup", () => {
    keyPressed = false;
})


