//getting all required elements
let que_count = 0;
let que_number = 1;
let counter;
let lineCounter;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");
const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//if start quiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show the info box
};

//if exit button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
};

//if continue button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //Show quiz box
    showQuestions(0);
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
};

//if next button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_number++;

        showQuestions(que_count);
        questionCounter(que_number);

        clearInterval(counter);
        startTimer(timeValue);

        clearInterval(lineCounter);
        startTimerLine(widthValue);

        next_btn.style.display = "none";
        timeOff.textContent = "Time left";
    } else {
        clearInterval(counter);
        clearInterval(lineCounter);
        
        console.log('Questions completed');
        showResultBox();
    }
};

// if replay button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");

    // reset global variables
    que_count = 0;
    que_number = 1;
    timeValue = 15;
    widthValue = 0;
    userScore = 0;

    showQuestions(que_count);
    questionCounter(que_number);

    clearInterval(counter);
    startTimer(timeValue);

    clearInterval(lineCounter);
    startTimerLine(widthValue);

    next_btn.style.display = "none";
    timeOff.textContent = "Time left";
}

// if quit button clicked
quit_quiz.onclick = () => {
    window.location.reload();
}

//getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    // const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].number + '. ' + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(lineCounter);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOption = option_list.children.length;

    if (userAnswer == correctAnswer) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log('correct answer');
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log('wrong answer');
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if wrong answer select/indicate correct answer automatically
        for (let i = 0; i <= allOption; i++) {
            if (option_list.children[i].textContent == correctAnswer) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    //onselect disable other option
    for (let i = 0; i < allOption; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

function showResultBox() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //Hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 40) {
        let scoreTag = '<span>and Congrats!, You got <p>' + userScore + '</p> out of <p>' + questions.length + ',' + '</p> Well done champ.</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 10) {
        let scoreTag = '<span>and nice, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>and sorry, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAnswer = questions[que_count].answer;
            let allOption = option_list.children.length;

            for (let i = 0; i < allOption; i++) {
                if (option_list.children[i].textContent == correctAnswer) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOption; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        }
    }
}

function startTimerLine(time) {
    lineCounter = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine.style.width = time + "px"
        if (time > 549) {
            clearInterval(lineCounter);
        }
    }
}

function questionCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuestionTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuestionTag;
}


// ====================================================================================
// // Quiz Questions
// const questions = [
//     {
//         question: "What does HTML stand for?",
//         options: [
//             "Hyper Text Preprocessor",
//             "Hyper Text Markup Language",
//             "Hyper Text Multiple Language",
//             "Hyper Tool Multi Language"
//         ],
//         answer: 1
//     },
//     {
//         question: "What does CSS stand for?",
//         options: [
//             "Common Style Sheet",
//             "Colorful Style Sheet",
//             "Computer Style Sheet",
//             "Cascading Style Sheet"
//         ],
//         answer: 3
//     }
// ];

// let currentQuestion = 0;
// let score = 0;
// let timer;

// const startBtn = document.querySelector(".start_btn button");
// const infoBox = document.querySelector(".info_box");
// const quizBox = document.querySelector(".quiz_box");
// const resultBox = document.querySelector(".result_box");
// const nextBtn = document.querySelector(".next_btn");
// const optionList = document.querySelector(".option_list");
// const timerSec = document.querySelector(".timer_sec");
// const restartBtns = document.querySelectorAll(".restart");
// const quitBtns = document.querySelectorAll(".quit");

// startBtn.onclick = () => {
//     infoBox.classList.add("active");
// };

// infoBox.querySelector(".restart").onclick = () => {
//     infoBox.classList.remove("active");
//     quizBox.classList.add("active");
//     showQuestion(currentQuestion);
//     startTimer(15);
// };

// quitBtns.forEach(btn => btn.onclick = () => window.location.reload());

// restartBtns.forEach(btn => btn.onclick = () => {
//     currentQuestion = 0;
//     score = 0;
//     resultBox.classList.remove("active");
//     quizBox.classList.add("active");
//     showQuestion(currentQuestion);
//     startTimer(15);
// });

// nextBtn.onclick = () => {
//     clearInterval(timer);
//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//         showQuestion(currentQuestion);
//         startTimer(15);
//     } else {
//         showResult();
//     }
// };

// function showQuestion(index) {
//     const queText = document.querySelector(".que_text span");
//     queText.textContent = questions[index].question;
//     optionList.innerHTML = "";

//     questions[index].options.forEach((option, i) => {
//         const div = document.createElement("div");
//         div.className = "option";
//         div.innerHTML = `< span > ${ option }</span> `;
//         div.onclick = () => selectOption(div, i);
//         optionList.appendChild(div);
//     });
// }

// function selectOption(selected, index) {
//     clearInterval(timer);
//     const correctAnswer = questions[currentQuestion].answer;
//     const options = optionList.children;

//     if (index === correctAnswer) {
//         selected.classList.add("correct");
//         selected.innerHTML += '<div class="icon tick"><i class="fas fa-check"></i></div>';
//         score++;
//     } else {
//         selected.classList.add("incorrect");
//         selected.innerHTML += '<div class="icon cross"><i class="fas fa-times"></i></div>';
//         options[correctAnswer].classList.add("correct");
//         options[correctAnswer].innerHTML += '<div class="icon tick"><i class="fas fa-check"></i></div>';
//     }

//     for (let opt of options) {
//         opt.classList.add("disabled");
//     }

//     nextBtn.style.display = "block";
// }

// function startTimer(time) {
//     timerSec.textContent = time;
//     timer = setInterval(() => {
//         time--;
//         timerSec.textContent = time;
//         if (time < 0) {
//             clearInterval(timer);
//             selectOption(null, -1);
//         }
//     }, 1000);
// }

// function showResult() {
//     quizBox.classList.remove("active");
//     resultBox.classList.add("active");
//     const scoreText = document.querySelector(".score_text span");
//     scoreText.innerHTML = `You got < p > ${ score }</p > out of < p > ${ questions.length }</p > `;
// }
