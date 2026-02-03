// // // // const para=document.querySelector('.para')
// // // // para.innertext="this is updated paragraph"
// // // // para.style.color="green"
// // // // console.log(para)

// // // const para=document.getElementsByClassName('para')
// // // console.log(para)

// // // const para2=document.querySelectorAll('.para') 
// // // // para2[0].innertext="this is updated paragraph"
// // // // para2[1].style.color="green"
// // // console.log(para2)

// // // const container=document.querySelector(".container")
// // // container.innerHTML="<h1>this is a heading </h1>"
// // // console.log(container)

// // const btn=document.querySelector("button")
// // btn.classList.add("btn")

// // function print(){
// //     console.log("hello you have clicked the button")
// // }

// // btn.addEventListener('click',print)
// // btn.removeEventListener('click',print)
// // // btn.addEventListener('click',()=>console.log("helloooo"))

// let intervalId = null;
// let hasStopped = false;

// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");

// startBtn.addEventListener("click", () => {
//     if (hasStopped) return; 

//     startBtn.disabled = true;
//     console.log("It is stopped")
//     stopBtn.disabled = false;

//     intervalId = setInterval(() => {
//         console.log("Running...");
//     }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//     clearInterval(intervalId);
//     stopBtn.disabled = true;
//     hasStopped = true;
//     startBtn.disabled = true;
//     console.log("Stopped permanently");
// });


// const form=document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log("form submitted")
// })
 // Take a variable 'a' and increment it by 1 every second, logging the value to the console each time and clear the interval after 10 increments.;
var a = 0;
var intervalId = setInterval(function() {
    a++;
    console.log(a);
    if (a >= 10) {
        clearInterval(intervalId);
    }
}, 1000);