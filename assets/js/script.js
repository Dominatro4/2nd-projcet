const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

let score = 0;
let timer = 30;

const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  // Add more questions here...
];

let currentQuestionIndex = 0;

function showQuestion(question) {
  questionText.innerText = question.question;
  answerButtons.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(correct) {
  if (correct) {
    score++;
    scoreElement.innerText = score;
  }
  showNextQuestion();
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    questionContainer.innerHTML = '<h2>Quiz Completed!</h2>';
  }
}

function updateTimer() {
  timer--;
  timerElement.innerText = timer;
  if (timer === 0) {
    showNextQuestion();
  }
}

showQuestion(questions[currentQuestionIndex]);
setInterval(updateTimer, 1000);