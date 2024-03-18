var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){        
        
        var buttonInnerHTML = this.innerHTML;

        console.log(this);

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio ("sounds/tom-1.mp3")
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            default:
                break;
        }
    });
}

document.addEventListener("keypress", function() {
    alert("Key was Pressed!");
});
