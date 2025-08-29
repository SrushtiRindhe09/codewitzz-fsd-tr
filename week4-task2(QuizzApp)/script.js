if (document.querySelector(".start-btn")) {
    document.querySelector(".start-btn").addEventListener("click", function() {
        window.location.href = "question.html";
    });
}

const questions = [{
        question: "What does CPU stand for?",
        options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Utility"],
        correctAnswer: "Central Processing Unit"
    },
    {
        question: "Which language is primarily used for web page structure?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: "HTML"
    },
    {
        question: "Which protocol is used to send emails?",
        options: ["HTTP", "SMTP", "FTP", "IP"],
        correctAnswer: "SMTP"
    },
    {
        question: "In binary code, what does '1' represent?",
        options: ["True", "False", "Zero", "Null"],
        correctAnswer: "True"
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Microsoft", "Google", "IBM"],
        correctAnswer: "Microsoft"
    },
    {
        question: "What is the main function of RAM?",
        options: ["Permanent storage", "Temporary storage", "Data backup", "Power supply"],
        correctAnswer: "Temporary storage"
    },
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(log n)"
    },
    {
        question: "What is the extension for JavaScript files?",
        options: [".java", ".js", ".script", ".html"],
        correctAnswer: ".js"
    },
    {
        question: "Which device is used to convert digital signals to analog?",
        options: ["Router", "Switch", "Modem", "Hub"],
        correctAnswer: "Modem"
    },
    {
        question: "Which data structure uses FIFO (First In First Out)?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: "Queue"
    }
];

let currentIndex = 0;
let totalQuestions = 10;
let score = 0;
const startingMinute = 5;
let time = startingMinute * 60;
let timerInterval = setInterval(startTimer, 1000);
const minutesBox = document.querySelectorAll(".time-box h2")[0];
const secondsBox = document.querySelectorAll(".time-box h2")[1];

function startTimer() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutesBox.textContent = minutes;
    secondsBox.textContent = seconds < 10 ? "0" + seconds : seconds;
    time--;

    if (time < 0) {
        clearInterval(timerInterval);
        alert("Time's up! Your score is: " + score);
        localStorage.setItem("score", score);
        window.location.href = "quizzdash.html";
    }
}

if (document.querySelector(".score")) {
    let score = Number(localStorage.getItem("score")) || 0;
    let totalQuestions = 10;
    let percentage = Math.round((score / totalQuestions) * 100);
    document.querySelector(".score").textContent = percentage + "%";
}


function updateProgressBar() {
    let percent = ((currentIndex + 1) / totalQuestions) * 100;
    document.querySelector(".progress").style.width = percent + "%";
}



function loadQuestion() {
    let q = questions[currentIndex];
    document.querySelector(".question-header span").textContent = `Question ${currentIndex + 1} of 10`;
    document.querySelector(".question-section h2").textContent = q.question;
    let optionsHTML = "";
    q.options.forEach(opt => {
        optionsHTML += `<label><input type="radio" name="answer" value="${opt}"> ${opt}</label>`;
    });
    document.querySelector(".options").innerHTML = optionsHTML;
    document.querySelector(".next-btn").textContent = (currentIndex === 9) ? "Submit" : "Next";

    updateProgressBar();

}


if (document.querySelector(".next-btn")) {
    document.querySelector(".next-btn").addEventListener("click", function() {
        let selected = document.querySelector('input[name="answer"]:checked');
        if (selected && selected.value === questions[currentIndex].correctAnswer) {
            score++;
        }
        currentIndex++;
        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            alert("Quiz completed! Your score is: " + score);
            localStorage.setItem("score", score);
            window.location.href = "quizzdash.html";
        }
    });
    loadQuestion();
}


if (document.querySelector(".btn.retake")) {
    document.querySelector(".btn.retake").addEventListener("click", function() {
        window.location.href = "question.html";
    });
}

if (document.querySelector(".btn.return")) {
    document.querySelector(".btn.return").addEventListener("click", function() {
        window.location.href = "index.html";
    });
}