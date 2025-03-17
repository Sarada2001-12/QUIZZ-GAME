const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
      answer: "Shakespeare"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Whale", "Giraffe", "Shark"],
      answer: "Whale"
    },
    {
      question: "Which is the largest ocean?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
      answer: "Da Vinci"
    },
    {
      question: "What is the smallest continent?",
      options: ["Asia", "Australia", "Africa", "Antarctica"],
      answer: "Australia"
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile"
    },
    {
      question: "What is the speed of light?",
      options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
      answer: "300,000 km/s"
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Kalahari", "Arctic"],
      answer: "Sahara"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 300; // 5 minutes timer
  let dateElement = document.getElementById('date');
  let timerElement = document.getElementById('timer');
  let quizElement = document.getElementById('quiz');
  let resultElement = document.getElementById('result');
  
  function displayDateTime() {
    const date = new Date();
    const formattedDate = date.toLocaleString();
    dateElement.textContent = `Date & Time: ${formattedDate}`;
  }
  
  function startTimer() {
    timer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timer);
        showResults();
      } else {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      }
    }, 1000);
  }
  
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
    quizElement.innerHTML = `
      <div class="question">${question.question}</div>
      <div class="answers">
        ${question.options.map((option, index) => `
          <label>
            <input type="radio" name="answer" value="${option}"> ${option}
          </label><br>
        `).join('')}
      </div>
    `;
  }
  
  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      if (selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
      }
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }
  
  function saveProgress() {
    alert("Progress Saved! (This is a simple alert, in a real app, you would save to a database or local storage.)");
  }
  
  function showResults() {
    let message = `You scored ${score} out of ${questions.length}.`;
  
    if (score === questions.length) {
      message += `<div class="reward">Congratulations! You won a reward: A Free Vacation!</div>`;
    } else {
      message += "<div>Better luck next time!</div>";
    }
  
    resultElement.innerHTML = message;
    document.getElementById('next-btn').disabled = true;
    document.getElementById('save-btn').disabled = true;
  }
  
  displayDateTime();
  startTimer();
  displayQuestion();
  