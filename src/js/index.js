//used webdevtrick and stackoverflow as a source of information/code
import { questions } from "./questions";

function Quiz(questions) {
  this.questions = questions; //questions array
  this.CurrentQuestion = 0; //tells you which question youre on
  this.score = 0; //score
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
  }

  this.questionIndex++; //moves to the next question if correct
};

Quiz.prototype.isEnded = function () {
  return this.questionIndedx === this.questions.length;
};

questions.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    const element = document.getElementById("question");
    element.innderHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; 1 < choices.length; i++) {
      let element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  let gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

const QuizGame = {
  populateIdwithHTML: function (id, content) {
    const element = document.getElementById(id); //gatheres specific id element from HTML
    element.innerHTML = content;
  },

  showNextQuestion: function () {
    if (quiz.reachesEnd()) {
      this.showResults();
    } else {
      this.showQuestion();
      this.showChoices();
      this.showProgress();
      this.showScore();
    }
  },

  showQuestion: function () {
    this.populateIdwithHTML("question", quiz.getCurrentQuestion().text);
  },
};

const quiz = new Quiz(questions);
console.log(QuizGame.showNextQuestion());
populate();
