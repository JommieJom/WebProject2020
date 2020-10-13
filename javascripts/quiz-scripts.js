var all_questions = [{
    question_string: "What color is the sky?",
    choices: {
        correct: "Blue",
        wrong: ["Pink", "Orange", "Green"]
    }
}, {
    question_string: "Which of the following elements aren’t introduced in HTML5?",
    choices: {
        // Put tag element in the choice string
        correct: "input",
        wrong: ["article", "footer", "hgroup"]
    }
}, {
    question_string: "How many wheels are there on a tricycle?",
    choices: {
        correct: "Three",
        wrong: ["One", "Two", "Four"]
    }
}, {
    question_string: 'Who is the main character of Harry Potter?',
    choices: {
        correct: "Harry Potter",
        wrong: ["Hermione Granger", "Ron Weasley", "Voldemort"]
    }
}];

function writeQandA(index) {
    var question = document.getElementById("question");
    var choiceList = document.getElementsByClassName("choice-text");

    question.innerHTML = all_questions[index].question_string;

    for (var i = 0; i < 3; ++i) {
        choiceList[i].innerHTML = all_questions[index].choices.wrong[i];
    }
}

questionIndex = Math.floor(Math.random() * 4);

writeQandA(questionIndex);