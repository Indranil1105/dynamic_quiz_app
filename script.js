const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: 2 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: 3 },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"], answer: 0 },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Osmium", "Oxalate"], answer: 0 },
    { question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], answer: 2 },
    { question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "Italian"], answer: 1 },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"], answer: 3 },
    { question: "What is the currency of the United Kingdom?", options: ["Euro", "Pound Sterling", "Dollar", "Yen"], answer: 1 },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 2 },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: 1 },
    { question: "Which country is the Great Wall of China located in?", options: ["Japan", "China", "India", "Mongolia"], answer: 1 },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Silver"], answer: 2 },
    { question: "Who is the author of the Harry Potter series?", options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Suzanne Collins"], answer: 1 },
    { question: "Which is the smallest continent by land area?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: 1 },
    { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: 1 },
    { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], answer: 2 },
    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: 0 },
    { question: "Which planet is closest to the sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
    { question: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"], answer: 3 },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Emily Brontë", "Jane Austen", "Charles Dickens", "George Eliot"], answer: 1 },
    { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 2 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: 2 },
    { question: "Who discovered penicillin?", options: ["Marie Curie", "Albert Einstein", "Alexander Fleming", "Isaac Newton"], answer: 2 },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: 2 },
    { question: "Which ocean is the Bermuda Triangle located in?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: 0 },
    { question: "Who was the first president of the United States?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], answer: 2 },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pb"], answer: 0 },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "South Korea", "Japan", "Thailand"], answer: 2 }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const timerElement = document.getElementById("timer");
const resultElement = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    clearInterval(timer);
    timerElement.textContent = "Time left: 15 seconds";
    let timeLeft = 15;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(index) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.answer) {
        score++;
        // alert("Correct!");
    } else {
        // alert(`Wrong! The correct answer was ${currentQuestion.options[currentQuestion.answer]}`);
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}



function endQuiz() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    timerElement.style.display = "none";
    resultElement.style.display = "block";
    resultElement.textContent = `Quiz over! Your score is ${score}/${questions.length}.`;
    restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    questionElement.style.display = "block";
    optionsElement.style.display = "block";
    timerElement.style.display = "block";
    resultElement.style.display = "none";
    restartBtn.style.display = "none";
    loadQuestion();
});

loadQuestion();
