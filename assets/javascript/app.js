// Declareation of variables
var incorAnswer = 0;
var correAnswer = 0;
var unAnswer = 0;
var timer = 120;

//var interval = setInterval(countdown, 1000);
var interval = 0;

var trivia = [
  {
    question: "Which Canadian City is considered Hollywood North?",
    answers: ["Toronto", "Montreal", "Vancouver", "Edmonton"],
    correctAnswer: "Vancouver"
  },
  {
    question: "What is Canada's National Sport?",
    answers: ["Hockey", "Baseball", "Basketball", "Lacrosse"],
    correctAnswer: "Lacrosse"
  },
  {
    question: "Which Canadian city ranks as the most educated in the country?",
    answers: ["Vancouver", "Toronto", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    question: "What is the oldest city on Canada?",
    answers: ["Niagara Falls", "Montreal", "St. Johns", "Ottawa"],
    correctAnswer: "St. Johns"
  },
  {
    question: "Which province is bilingual?",
    answers: ["Saskatchewan", "Quebec", "Ontario", "New Brunswick"],
    correctAnswer: "New Brunswick"
  },
  {
    question: "How many time zones does Canada have?",
    answers: ["8", "5", "4", "6"],
    correctAnswer: "6"
  },
  {
    question: "What is 80% of the world's supply comes from Canada?",
    answers: ["Steel", "Lumber", "Maple Syrup", "Water"],
    correctAnswer: "Maple Syrup"
  },
  {
    question: "How many oceans border Canada?",
    answers: ["1", "4", "2", "3"],
    correctAnswer: "3"
  }
];

function countdown() {
  $("#counter").html(timer);
  if (timer > 0) {
    timer--;
  } else {
    clearInterval(interval);
    validAnswer();
  }
}

function start() {
  $("#content").empty();
  interval = setInterval(countdown, 1000);
  $("#content").prepend(
    '<h2> Time remaining <span id="counter"></span> seconds </h2>'
  );
  for (i = 0; i < trivia.length; i++) {
    $("#content").append("<h3>" + trivia[i].question + "</h3>");
    var arrlength = trivia[i].answers.length;
    for (j = 0; j < arrlength; j++) {
      $("#content").append(
        "<input type='radio' name='question-" +
          i +
          "' value='" +
          trivia[i].answers[j] +
          "'>" +
          trivia[i].answers[j]
      );
    }
  }
  $("#content").append("<br><button id='done'>Done</button>");

  //$(document).on("click", "#done", validAnswer);
}

// Reset
function initialize() {
  incorAnswer = 0;
  correAnswer = 0;
  unAnswer = 0;
  timer = 120;
}

$("#start").on("click", function() {
  initialize();
  start();
});

$(document).on("click", "#done", validAnswer);

function validAnswer() {
  // keep track of user's answers
  var userAnswer = "";
  var userComp = "";
  // for each question...
  for (var i = 0; i < trivia.length; i++) {
    var checked = $(`input[name=question-${i}]:checked`);

    if (checked.val() == undefined) {
      unAnswer++;
    } else if (checked.val() === trivia[i].correctAnswer) {
      correAnswer++;
    } else {
      incorAnswer++;
    }
  }
  showResults();
}

function showResults() {
  clearInterval(interval);

  var results =
    "<h2>Correct Answers: " +
    correAnswer +
    "</h2><h2>Incorrect Answers: " +
    incorAnswer +
    "</h2><h2>Unanswered Questions: " +
    unAnswer +
    "</h2>";

  $("#content").empty();
  $("#content").append("<h2>All Done!</h2>");
  $("#content").append(results);
  // $("#content").append(
  //   "<br><button id='play'>Click here to play again</button>"
  //  );

  // $(document).on("click", "#play", function() {
  //    $("#content").empty();
  //   initialize();
  //   start();
  // });
}
