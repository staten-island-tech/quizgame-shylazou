//reference to webdevtrick and stackoverflow

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0; //index of 0 at the first question
}
//quiz array

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex]; //changes the question as it moves on
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().isCorrect(answer)) {
    this.score++; //point added if the question is correct
  }

  this.questionIndex++; //code preparing for next question
};

Quiz.prototype.isEnded = function () {
  return this.questionIndex === this.questions.length;
};

function populate() {
  if (quiz.isEnded()) {
    showScores(); //shows the score if reaches end of the quiz
  } else {
    // to show the questions
    let element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // to show the answer choices
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      //sets a vaciable before the loop starts and increases in value everytime the code goes through
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
} //displays choices 1-3, goes to next question after click

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
} //shows the question number you are on

function showScores() {
  let gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
} //shows score at the end of the quiz

// import questions
import { questions } from "./questions.js";
// generate the quiz and show the first question
const quiz = new Quiz(questions);
//display the quiz
populate();
