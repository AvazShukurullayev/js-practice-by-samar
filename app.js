"use strict"

// let answers = []
// let questions = ["What is your name?", "What is your phone number?", "What is your address?", "How old are you?"]
// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i])
// }
//
// console.log("answers", answers)

// let answers = []
// let questions = ["What is your name?", "What is your phone number?", "What is your address?", "How old are you?"]
//
// let i = 0
// do {
//     answers[i] = prompt(questions[i])
//     i++
// } while (i < questions.length)
//
// console.log("answers", answers)

// let answers = []
// let questions = ["What is your name?", "What is your phone number?", "What is your address?", "How old are you?"]
//
// let i = 0
// while (i < questions.length) {
//     answers[i] = prompt(questions[i])
//     i++
// }
//
// console.log("answers", answers)


// if
// else
// else if
// switch case


function appFunc(name, age) {
    console.log(`Hello my name is ${name} and I am full stack developer`)

    function hardSkills() {
        const skills = ["HTML", "CSS", "JavaScript"]
        for (let i = 0; i < skills.length; i++) {
            alert(`I have ${skills[i]} skill.`)
        }
    }

    hardSkills()

    function checkAge(age) {
        if (age > 18) {
            alert("It is good age to start to learn IT")
        } else if (age < 18) {
            alert("You can start to learn IT at you age.")
        } else {
            alert("Oops. I am sorry, also you can do it, dude")
        }
    }

    checkAge(age)

    function calcPow(number) {
        return number * number
    }

    console.log("calcPow => ", calcPow(25))
}

appFunc("Shaq", 19)