const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circle.length){
        currentActive = circle.length;
    }
    update();
        
})


prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1){
        currentActive = 1;
    }
    update();
})


function update(){
    circle.forEach((circleach, idx) => {
        if (idx < currentActive){
            circleach.classList.add("active");
        }
        else{
            circleach.classList.remove("active");
        }
    })


    if (currentActive === 1){
        prev.disabled = true
    }
    else if(currentActive === circle.length){
        next.disabled = true
    }
    else{
        next.disabled = false
        prev.disabled = false
    }
}


