function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
//creates multiple objects of the same type (constructor function)
//.this replaces the current object with the next object

Question.prototype.isCorrect = function (choice) {
  return this.answer === choice;
};
//if chosen choice matches the correct answer returns as true

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
    "Do our human accomplishments have a long-term, universal significance?",
    [
      "Significance is subjuective. If there is no one ot assign significance, there is none",
      "Can't we just die in peace without haveing to think about mind boggling questions to the universe",
      "It depends in which context you allocate Universal Significance",
      "The real question is, who would our achievements be significant to?",
    ],
    "Can't we just die in peace without haveing to think about mind boggling questions to the universe"
  ),
  new Question(
    "Where is the best place to go after school",
    [
      "Home",
      "Vivi's Bubble Tea",
      "The place with the death chicken wings",
      "What if I live at school",
    ],
    "Home"
  ),
  new Question(
    "Which came first the chicken or the egg",
    [
      "Chicken Chicken",
      "Egg Egg",
      "Two birds that hadn't evolved into chickens created the first egg",
      "Who cares? I eat both",
    ],
    "Two birds that hadn't evolved into chickens created the first egg"
  ),
];

export { questions };
