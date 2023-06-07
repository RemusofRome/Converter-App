/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Var
let inputEl = document.getElementById("input-El")
const saveEl = document.getElementById("save-El")
const btnEl = document.getElementById("btn-El")
let value1 = null
let value2 = null
let outputEl = document.getElementById("output-El")
let answer = null
let answerArr = []
let text1 = ""
let text2 = ""
// Functions

//Events

btnEl.addEventListener("click", function converted() {
    if (document.getElementById("Measurement1").value == "1") {
        value1 = 1
        text1 = "Inches"
        console.log(value1)
   } else if (document.getElementById("Measurement1").value == "2") {
        value1 = 2
        text1 = "Feet"
        console.log(value1)
   } else if (document.getElementById("Measurement1").value == "3") {
       value1 = 3
       text1 = "Yards"
       console.log(value1)
   } else {
       value1 = 4
       text1 = "Miles"
       console.log(value1)
   }

    if (document.getElementById("Measurement2").value == "1a") {
     value2 = 1
     text2 = "Millimeters"
     console.log(value2)
    } else if (document.getElementById("Measurement2").value == "2a") {
     value2 = 2
     text2 = "Centimeters"
     console.log(value2)
    } else if (document.getElementById("Measurement2").value == "3a") {
    value2 = 3
    text2 = "Meters"
    console.log(value2)
    } else {
    value2 = 4
    text2 = "Kilometers"
    console.log(value2)
}
     
    if (value1 === 1) {
        inchmetric ()
    } else if (value1 === 2) {
        footmetric()
    } else if (value1 === 3) {
        yardmetric()
    }else if (value1 === 4) {
        milemetric()
    } 
    console.log(answer)
    answerArr.push(answer)
    console.log(answerArr)
    outputEl.innerHTML += `<li>${document.getElementById("input-El").value} ${text1} = ${answer} ${text2}</li>`
})

function inchmetric () {
    if (value2 === 1) {
        let equation = (inputEl.value) * 25.4
        answer = equation.toFixed(2)
    } else if (value2 === 2) {
        let equation = (inputEl.value) * 2.54
        answer = equation.toFixed(2)
    } else if (value2 === 3) {
        let equation = (inputEl.value) * .0254
        answer = equation.toFixed(5)  
    } else if (value2 === 4) {
        let equation = (inputEl.value) * 0.0000254
        answer = equation.toFixed(10)
    }
    return answer;}

function footmetric() {
    if (value2 === 1) {
        equation = (inputEl.value) * 304.8
        answer = equation.toFixed(2)
    } else if (value2 === 2) {
        let equation = (inputEl.value) * 30.48
        answer = equation.toFixed(2)
    } else if (value2 === 3) {
        let equation = (inputEl.value) * 0.3048
        answer = equation.toFixed(5)
    } else if (value2 === 4) {
        let equation = (inputEl.value) * 0.0003048
        answer = equation.toFixed(10)
}
    return answer;}

function yardmetric() {
     if (value2 === 1) {   
        let equation = (inputEl.value) * 914.4
        answer = equation.toFixed(2)
    } else if (value2 === 2) {
        let equation = (inputEl.value) * 91.44
        answer = equation.toFixed(2)
    } else if (value2 === 3) {
        let equation = (inputEl.value) * 0.9144
        answer = equation.toFixed(5)
    } else if (value2 === 4) {
        let equation = (inputEl.value) * 0.0009144
        answer = equation.toFixed(10)
}
    return answer;}

function milemetric() {
    if (value2 === 1) {   
        let equation = (inputEl.value) * 1609344
        answer = equation.toFixed(2)
    } else if (value2 === 2) {
        let equation = (inputEl.value) * 160934
        answer = equation.toFixed(2)
    } else if (value2 === 3) {
        let equation = (inputEl.value) * 1609.3400007802
        answer = equation.toFixed(5)
    } else if (value2 === 4) {
        let equation = (inputEl.value) * 1.6093400007801998974
        answer = equation.toFixed(10)
   }
    return answer;}


    //for (let i = 0; i < answerArr.length; i++) {
        //outputEl.innerHTML += answer[i] + " "}

                        //feet  100   mm
       // function adding(value1, input, value2) {
           // 100 feet * 304.8 mm = answer
       // }

       // function adding(feet, 100, mm)
