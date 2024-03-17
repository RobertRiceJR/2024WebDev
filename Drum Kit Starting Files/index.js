var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++){

document.querySelectorAll(".drum").addEventListener("click",handleclick);
}

function handleclick(){
    alert("I got clicked!");

    //What to do when click detected
}