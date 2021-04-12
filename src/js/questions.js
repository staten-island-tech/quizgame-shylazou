//used webdevtrick as a source of information/code
function Question(text, choices, answer) {
  //object constructor function to create multiple questions
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
//.this substitutes a current object for the next object

Question.prototype.isCorrect = function (choice) {
  return this.amswer === choice;

  //if chosen choice matches the correct answer, returns as true
};

const questions = [
  new Question(
    "Who is the best teacher at Staten Island Tech?",
    ["Mr, Whalen", "Mr. Henriques", "Ms. Maslukova", "Ms. Danna"],
    "Mr. Whalen"
  ),

  new Question(
    "What is the goal of Humanity?",
    [
      "To realize and understand the Principle of Universitality",
      "It would be better comprehended if we though about distinguishing between it and divinity",
      "Moral Effort towards Justice",
      "Why should we have a goal? YOLO",
    ],
    "Why should we have a goal? YOLO"
  ),

  new Question(
    "Which orange came first, the fruit or the color",
    [
      "Fruit",
      "Color",
      "Both at the same time",
      "The fruit originally came from China- the German word Apfelsine and the Dutch sinaasappel reflect this but our word comes from the Old Persian work narang",
    ],
    "The fruit originally came from China- the German word Apfelsine and the Dutch sinaasappel reflect this but our word comes from the Old Persian work narang"
  ),

  new Question(
    "Do our human accomplishments have a long-term, universal significance? or when the world ends do we all end with it, including what we achived?",
    [
      "Significance is subjuective. If there is no one ot assign significance, there is none",
      "Can't we just die in peace without haveing to think about mind boggling questions to the universe",
      "It depends in which context you allocate Universal Significance",
      "The real question is, who would our achievements be significant to?",
    ],
    "Can't we just die in peace without haveing to think about mind boggling questions to the universe"
  ),
];

export { questions };
