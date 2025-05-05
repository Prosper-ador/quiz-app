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
  
  