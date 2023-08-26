const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const usernameInput = document.getElementById('username');
const pointsElement = document.getElementById('points');

let points = 0;

let currentQuestionIndex = 0;


startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', showNextQuestion);

// Questions and answers

    // Template for questions
   // {
   //     question: "",
    //    options: ["", "", "", ""],
   //     correctAnswer: ""
  //  }

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    // More questions here


];

function startQuiz() {
    startButton.classList.add('hidden');
    usernameInput.setAttribute('disabled', true);
    questionContainer.classList.remove('hidden');
    showNextQuestion();
}

function showNextQuestion() {
    feedbackElement.textContent = ''
    updatePoints();

    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(option, question.correctAnswer));
            optionsElement.appendChild(button);
        });

        nextButton.classList.add('hidden');
        currentQuestionIndex++;
    } else {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
    }
}

function updatePoints() {
    pointsElement.textContent = points;
}


function selectAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Incorrect.';
    }
    scoreElement.textContent = score;
    updatePoints();
    nextButton.classList.remove('hidden');
}