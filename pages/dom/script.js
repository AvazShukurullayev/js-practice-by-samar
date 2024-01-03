"use strict"

let chooseBtn = document.getElementById("choose")
let receiveBtn = document.getElementById("receive")
console.log(chooseBtn)
console.log(receiveBtn)

let chooseButton = document.querySelector("#choose"),
    receiveButton = document.querySelector("#receive"),
    title = document.querySelector(".title");

console.log(chooseButton)
console.log(receiveButton)
console.log(title)

// Events

chooseButton.addEventListener("click", function () {
    title.textContent = "You are a good big boy"
})