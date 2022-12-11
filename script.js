let submit = document.getElementById("submit");
let grade = document.getElementById("grade");

let question1 = document.getElementById("correct1");
let q1a2 = document.getElementById('q1a2');
let q1a3 = document.getElementById("q1a3");
let q1a4 = document.getElementById("q1a4");

let question2 = document.getElementById("correct2");
let q2a2 = document.getElementById("q2a1");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");

let question3 = document.getElementById("correct3");
let q3a1 = document.getElementById("q3a1");
let q3a3 = document.getElementById("q3a3");
let q3a4 = document.getElementById("q3a4");

let question4 = document.getElementById("correct4");
let q4a1 = document.getElementById("q4a1");
let q4a2 = document.getElementById("q4a2");
let q4a4 = document.getElementById("q4a4");

window.onload = sessionStorage.clear();

function cleanUp1 (){
    a = 0;
    let answer1 = JSON.stringify(a);
    window.sessionStorage.removeItem("answer1");
    window.sessionStorage.setItem("answer1", a);
}
function cleanUp2 (){
    b = 0;
    let answer1 = JSON.stringify(b);
    window.sessionStorage.removeItem("answer2");
    window.sessionStorage.setItem("answer2", b);
}
function cleanUp3 (){
    c = 0;
    let answer1 = JSON.stringify(c);
    window.sessionStorage.removeItem("answer3");
    window.sessionStorage.setItem("answer3", c);
}
function cleanUp4 (){
    d = 0;
    let answer1 = JSON.stringify(d);
    window.sessionStorage.removeItem("answer4");
    window.sessionStorage.setItem("answer4", d);
}


// Question 1 Logic
question1.addEventListener('click', questionValue1)
    function questionValue1() {
        a = 1;
        let answer1 = JSON.stringify(a);
        window.sessionStorage.setItem('answer1', a);
    }
    
q1a2.addEventListener('click', cleanUp1);
q1a3.addEventListener('click', cleanUp1);
q1a4.addEventListener('click', cleanUp1);


// Question 2 Logic
question2.addEventListener('click', questionValue2)
    function questionValue2() {
        b = 1;
        let answer2 = JSON.stringify(b);
        window.sessionStorage.setItem('answer2', b);
}
q2a1.addEventListener('click', cleanUp2);
q2a3.addEventListener('click', cleanUp2);
q2a4.addEventListener('click', cleanUp2);


// Question 3 Logic
question3.addEventListener('click', questionValue3)
    function questionValue3() {
    c = 1;
    let answer3 = JSON.stringify(c);
    window.sessionStorage.setItem("answer3", c);
}
q3a1.addEventListener('click', cleanUp3);
q3a3.addEventListener('click', cleanUp3);
q3a4.addEventListener('click', cleanUp3);


// Question 4 Logic
question4.addEventListener('click', questionValue4)
    function questionValue4() {
    d = 1;
    let answer4 = JSON.stringify(d);
    window.sessionStorage.setItem("answer4", d);
}
q4a1.addEventListener('click', cleanUp4);
q4a2.addEventListener('click', cleanUp4);
q4a4.addEventListener('click', cleanUp4);



// Submit Button Logic
submit.addEventListener('click', total)
   function total() {
        let answers = JSON.parse(a, b, c, d);
        console.log(typeof(a));
        let total = a + b + c + d;
        let score = (total / 4) * 100;
        if (typeof(a || b || c || d) == null) {
            grade.textContent = "Please select an answer for every question.";
        }
        else {
            grade.textContent = score + "%"
        }
    }
