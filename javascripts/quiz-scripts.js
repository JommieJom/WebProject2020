var question = document.getElementById('question');
var choiceList = Array.from(document.getElementsByClassName("choice-text"));
var choiceContainer = Array.from(document.getElementsByClassName("choice-container"));

let questionList = [{
  id: 1,
  asked_question: "What is a ?",
  choices: ["One", "Two", "Three", "Four"],
  correct_choice: 1
},
{
  id: 2,
  asked_question: "What is b ?",
  choices: ["One 111", "Two 222", "Three 333", "Four 444"],
  correct_choice: 4
}, 
{
  id: 3,
  asked_question: "What is c ?",
  choices: ["111", "T22", "T333", "44444"],
  correct_choice: 2
}]

function writeQandA(index) {
  
  question.innerHTML = questionList[index].asked_question;

  for (var i = 0; i < 4; ++i) {
    choiceList[i].innerText = questionList[index].choices[i];
  }
}

choiceContainer.forEach((choice) => {
  choice.addEventListener('click', (e) => {

  questionIndex = Math.floor(Math.random() * 3);
  writeQandA(questionIndex);
    console.log("Test");
  });
});

questionIndex = Math.floor(Math.random() * 3);
writeQandA(questionIndex);