document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choiceList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", function () {
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choiceList.innerHTML = "";
    questions[currentQuestionIndex].choices.forEach((option) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = `
        ${option}
        `;
      choiceList.appendChild(liElement);
      liElement.addEventListener("click", function () {
        document
          .querySelectorAll("#choices-list li")
          .forEach((opt) => opt.classList.remove("selected"));

        liElement.classList.add("selected");
        liElement.style.backgroundColor = "#32CD32";
        if (option === questions[currentQuestionIndex].answer) {
          score++;
        }
        nextBtn.classList.remove("hidden");
      });
    });
  }

  nextBtn.addEventListener("click", function () {
    if (currentQuestionIndex === questions.length - 1) {
      showResult();
    } else {
      currentQuestionIndex++;
      showQuestion();
    }
  });

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = score;
  }

  restartBtn.addEventListener("click", function () {
    currentQuestionIndex = 0;
    score = 0;
    startBtn.classList.remove("hidden");
    questionContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");
  });
});
