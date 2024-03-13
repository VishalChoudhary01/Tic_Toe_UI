const boxs = document.querySelectorAll(".square");
const circle = document.querySelector(".outterCircle");
const slashes = document.querySelectorAll(".slash");
let firstSquare = boxs[0];
let secondSquare = boxs[1];
firstSquare.addEventListener("click", () => {
  circle.classList.add("activeCircle");
});

slashes.forEach((slash) => {
  secondSquare.addEventListener("click", () => {
    slash.classList.add("activeCross");
  });
});

/* shorthand for add event for multiple classes
    
boxs[0].addEventListener("click",()=>{
        circle.classList.add("activeCircle");
    })
    
*/

/*
add class on same multiple class name

 secondSquare.addEventListener("click",()=>{
     slashes[0].classList.add("activeCross");
     slashes[1].classList.add("activeCross");
 })
 
*/

/* long method add event on multiple classes*/
// let firstSquare;
// let secondSquare;
// boxs.forEach((box ,index)=>{
//     if(index===0){
//         firstSquare=box;
//         firstSquare.addEventListener("click",()=>{
//             circle.classList.add("activeCircle");
//         })
//     }
//     else{
//         secondSquare=box;
//         secondSquare.addEventListener("click",()=>{
//             slashes.forEach((slash)=>{
//                 slash.classList.add("activeCross");
//             })

//         })
//     }

// })
