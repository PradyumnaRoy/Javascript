        //Javascript Events
// onchange =>	An HTML element has been changed
// onclick	=> The user clicks an HTML element
// onmouseover =>	The user moves the mouse over an HTML element
// onmouseout => The user moves the mouse away from an HTML element
// onkeydown =>	The user pushes a keyboard key
// onload =>	The browser has finished loading the page

// Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

let btn1 = document.querySelector("#btn1");
// console.log(btn1);

// btn1.onclick = () => {
//     alert("Button is Clicked");
// };

// let div = document.querySelector("div");
// div.onmouseover = function () {
//     alert("HI");
// }

let flag = true;
let body = document.querySelector("body");
let heading = document.querySelector("h2");
btn1.addEventListener("click",() =>{
    if(flag){
        body.style.backgroundColor = "Black";
        heading.style.color = "White";
        flag = false;
    } else {
        body.style.backgroundColor = "white";
        heading.style.color = "Black";
        flag = true;
    }

});
