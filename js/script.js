const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e){
    console.log(this.classList.value);
}

//you can change the capture to true and observe the console while clicking the divs.
divs.forEach(element => {
    element.addEventListener("click", logText, {
        capture: false,
        once: true
    })
});

button.addEventListener("click", () => {
    console.log("click!!!");
}, {
    once: true
});