(function () {
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Who is the best teacher at Staten Island Tech?",
      answers: {
        a: "Mr. Whalen",
        b: "Mr. Henriques",
        c: "Ms. Maslukova",
        d: "Ms. Danna",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the goal of humanity?",
      answers: {
        a: "To realize what is the Principle of Universitality",
        b:
          "It would be better comprehended if we thought about distinguishing between it and Divinity",
        c: "Moral Effort towards Justice",
        d: "Why should we have a goal? YOLO",
      },
      correctAnswer: "d",
    },
    {
      question: "Which prange came first? the fruit or the color",
      answers: {
        a: "Fruit",
        b: "Color",
        c: "Both at the same time",
        d:
          "The fruit originally came from China – the German word Apfelsine and the Dutch sinaasappel (Chinese apple) reflect this – but our word ultimately comes from the Old Persian word narang",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Do our human accomplishments have a long-term, universal significance? or when the world ends do we all end with it, including what we achived?",
      answers: {
        a:
          "Significance is subjuective. If there is no one ot assign significance, there is none",
        b:
          "The real question is, who would our achievements be significant to?",
        c: "It depends in which context you allocate Universal Significance",
        d:
          "Can't we just die in peace without haveing to think about mind boggling questions to the universe",
      },
      correctAnswer: "d",
    },
    {
      question: "What is the meaning of life?",
      answers: {
        a: "To deny it. none of this ever existed",
        b:
          "How do we know that the lives we're living aren't just hallucinatins of our own imaginations?",
        c: "42",
        d: "No one cares",
      },
      correctAnswer: "b",
    },
  ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();
