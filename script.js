/*
const quizData = [
    {
      question: "What is the output of typeof null?",
      options: ["object", "null", "undefined", "boolean"],
      answer: "object"
    },
    {
      question: "Which keyword declares a block-scoped variable?",
      options: ["var", "let", "const", "define"],
      answer: "let"
    },
    {
      question: "Which method converts JSON to a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "parse.JSON()"],
      answer: "JSON.parse()"
    },
    {
      question: "How do you write a comment in JavaScript?",
      options: ["<!-- comment -->", "// comment", "** comment **", "# comment"],
      answer: "// comment"
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "An object inside a loop",
        "A function inside a string",
        "A function with access to its outer scope",
        "A loop inside a condition"
      ],
      answer: "A function with access to its outer scope"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startBtn = document.getElementById('start-btn');
  const submitBtn = document.getElementById('submit-btn');
  const restartBtn = document.getElementById('restart-btn');
  
  const startScreen = document.getElementById('start-screen');
  const quizContainer = document.getElementById('quiz-container');
  const resultScreen = document.getElementById('result-screen');
  
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const scoreText = document.getElementById('score-text');
  
  startBtn.addEventListener('click', startQuiz);
  submitBtn.addEventListener('click', submitAnswer);
  restartBtn.addEventListener('click', restartQuiz);
  
  function startQuiz() {
    startScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
  }
  
  function loadQuestion() {
    const current = quizData[currentQuestionIndex];
    questionText.textContent = current.question;
    optionsContainer.innerHTML = '';
  
    current.options.forEach(option => {
      const label = document.createElement('label');
      label.classList.add('option');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'option';
      input.value = option;
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + option));
      optionsContainer.appendChild(label);
    });
  }
  
  function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return alert("Please select an answer");
  
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestionIndex].answer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizContainer.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreText.textContent = `You got ${score} out of ${quizData.length} correct!`;
  }
  
  function restartQuiz() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
  }
*/

(function () {
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const correctionScreen = document.getElementById('correction-screen');
    const finalSummary = document.getElementById('final-summary');
  
    const startBtn = document.getElementById('start-btn');
    const submitBtn = document.getElementById('submit-btn');
    const nextQuizBtn = document.getElementById('next-quiz-btn');
  
    const questionText = document.getElementById('question-text');
    const optionsList = document.getElementById('options-list');
    const correctionsContainer = document.getElementById('corrections-container');
    const finalScoreText = document.getElementById('final-score-text');
  
    let currentQuizIndex = 0;
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let quizKeys = Object.keys(quizSets);
  
    function showScreen(screen) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      screen.classList.add('active');
    }
  
    function initQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      userAnswers = [];
      showScreen(quizScreen);
      loadQuestion();
    }
  
    function loadQuestion() {
      const currentQuiz = quizSets[quizKeys[currentQuizIndex]];
      const q = currentQuiz[currentQuestionIndex];
      questionText.textContent = q.question;
      optionsList.innerHTML = '';
      q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="radio" name="option" value="${opt}"/> ${opt}</label>`;
        optionsList.appendChild(li);
      });
    }
  
    function checkAnswer() {
      const selected = document.querySelector('input[name="option"]:checked');
      if (!selected) return;
      const answer = selected.value;
      const correctAnswer = quizSets[quizKeys[currentQuizIndex]][currentQuestionIndex].answer;
      userAnswers.push({ question: questionText.textContent, answer, correctAnswer });
  
      if (answer === correctAnswer) score++;
      currentQuestionIndex++;
  
      if (currentQuestionIndex < 5) {
        loadQuestion();
      } else {
        showCorrections();
      }
    }
  
    function showCorrections() {
      showScreen(correctionScreen);
      correctionsContainer.innerHTML = `<p>You scored ${score} out of 5</p>`;
      userAnswers.forEach(ans => {
        const div = document.createElement('div');
        div.innerHTML = `<p><strong>${ans.question}</strong><br/>Your answer: <span class="${ans.answer === ans.correctAnswer ? 'correct' : 'incorrect'}">${ans.answer}</span><br/>Correct: ${ans.correctAnswer}</p>`;
        correctionsContainer.appendChild(div);
      });
    }
  
    function goToNextQuiz() {
      currentQuizIndex++;
      if (currentQuizIndex < quizKeys.length) {
        initQuiz();
      } else {
        showScreen(finalSummary);
        finalScoreText.textContent = "You've completed all quizzes!";
      }
    }
  
    startBtn.onclick = () => {
      currentQuizIndex = 0;
      initQuiz();
    };
    submitBtn.onclick = checkAnswer;
    nextQuizBtn.onclick = goToNextQuiz;
  })();
  
  