const myQuestions = [ // write an array of the questions and answers in the quiz
    {   
        questionNum: 1,
        question: "What year was the Marvel Film, Avengers: Endgame, set in?",
        answers: [  // put  the answers in the array and each question two values, answer number and the answer value
            {num: "1", val: "2020"},
            {num: "2", val: "2019"},
            {num: "3", val: "2024"},
            {num: "4", val: "2023"}
        ],
        correctAnswer: "4"
    },
    {   
        questionNum: 2,
        question: "Which city does Hawkeye and Black Widow often reminisce?",
        answers: [ 
            {num: "1", val:"Budapest"},
            {num: "2", val: "Prague"},
            {num: "3", val: "Instanbul"},
            {num: "4", val: "Sokovia"}
        ],
            
        correctAnswer: "1"
    },
    {   
        questionNum: 3,
        question: "What universal element does the blue infinity stone control?",
        answers: [ 
            {num: "1", val: "Power"},
            {num: "2", val: "Reality"},
            {num: "3", val: "Space"},
            {num: "4", val: "Time"}
        ],
        
        correctAnswer: "3"
    },
    {   
        questionNum: 4,
        question: "What  material is Captain America's shield made out of?",
        answers: [ 
            {num: "1", val: "Adamantium"},
            {num: "2", val: "Uru"},
            {num: "3", val: "Gironium"},
            {num: "4", val: "Vibranium"}
        ],
       
        correctAnswer: "4"
    },
    {   
        questionNum: 5,
        question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
        answers: [ 
            {num: "1", val: "M.A.R.V.I.N"},
            {num: "2", val: "J.A.R.V.I.S"},
            {num: "3", val: "H.O.M.E.R"},
            {num: "4", val: "A.L.F.R.E.D"}
        ],
       
        correctAnswer: "2"
    }
    
];

// This links the JavaScript to the HTML document 
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz(){

    function showQuestions(){
        var output = []; // variable to hold the HTML output
        for(var i = 0; i < myQuestions.length; i++){ // created a 'for' loop to show and loop through the quiz questions
            var currentQuestion = myQuestions[i];
            output.push ('<div>'); //seperates each question into its own div
            output.push(  // adds questions to output
                '<div class="question">' + currentQuestion.question + '</div>'
            ); 
            for(var j = 0; j < currentQuestion.answers.length; j++){ // use a different variable 'j' to not confuse Javascript
                var currentAnswer = currentQuestion.answers[j];
                if(currentAnswer.num === currentQuestion.correctAnswer){
                output.push( // adds answers to output 
                    '<div class = "answerRow" onclick="selectAnswer(this,'+ currentQuestion.questionNum + "," + currentAnswer.num +')">' +
                        //'<div class="answerNum">' + currentAnswer.num + '</div>' +
                        '<div class="answerVal">' + currentAnswer.val + '</div>' +
                        '<div class="answerCorrect"> </div>' + // adds correct if the answer chosen is the correct answer 
                    '</div>'
                ); 
                } else {

                output.push(
                    '<div class = "answerRow incorrect" onclick="selectAnswer(this,'+ currentQuestion.questionNum + "," + currentAnswer.num +')">' +
                        //'<div class="answerNum">' + currentAnswer.num + '</div>' +
                        '<div class="answerVal">' + currentAnswer.val + '</div>' +
                    '</div>'
                ); 
                }
            }
            output.push ('</div>'); // this closes one above

        }

        quizContainer.innerHTML = output.join(''); // joins array together and adds to HTML
    }
    
    // calculate the score and show the results
    function showResults() {
      var numOfCorrectA = 0; // variable to store number of correct answers
      var totalNumOfQA = myAnswers.length; // var that stores total number of Qs that I have answered
      var totalNumberOfQ = myQuestions.length; //var for total number of questions available 

      // this will loop through all questions available and then try and find an answer if we have one and if we do, it will check if it is correct. If it is correct it will increase the correct answer variable by 1.
      for (var i = 0; i < myQuestions.length; i++) {
        var currentQuestion = myQuestions[i];
        var currentAnswer = currentQuestion.correctAnswer;
        var myAnswerForThisQObject = myAnswers.filter(function (e) {
            return e.questionNumber == currentQuestion.questionNum;
          }); // try to find the current answer
          if (myAnswerForThisQObject.length > 0) {
            var myAnswerForThisQ = myAnswers.filter(function (e) {
              return e.questionNumber == currentQuestion.questionNum;
            })[0].myAnswer; // if there is no question, ignore it and carry on the loop

            if (currentAnswer == myAnswerForThisQ) {
              // if answer is correct
              numOfCorrectA++; // add to the number of correct answers
            }
          }
      }
      if (totalNumOfQA == myQuestions.length) //total number of questions is myQuestions.length
      {
        $("#results").html( // JQuery - show user how many answers they got correct in the quiz
            "You have scored " + numOfCorrectA + " out of " + myQuestions.length
        ); 
      } else {
          $(".errorMessage").show();
      }

      //document.querySelectorAll(".answerCorrect").style.display="block";
    }

   


    // show the questions
    showQuestions();

    // when user clicks submit, show results
    submitButton.onclick = function(){
        showResults();
    }
}



var myAnswers = [];
    function selectAnswer(source, qNum, aNum) {
        myAnswers = myAnswers.filter(function(e){ return e.questionNumber!==qNum ;   }); //it's removing answers for the selected question - if you change your answer to a question, it only saves the current answer
        myAnswers.push({questionNumber: qNum, myAnswer: aNum}); //this adds the new selected answer
        $(source).parent().find(".answerRow").removeClass("buttonSelected");
        // source represents the answer row we clicked
        //$(source).parent() returns the div around the whole question and all answers
        //.find(."answerRow") returns all the answers in that question
        // .removeClass removes the class if it is there
        $(source).addClass("buttonSelected");
        //before we add class we must remove class for all the other answers for that  question 
    }

    function startQuiz() { // show quiz container, quiz button & hide avengers assemble button
        $("#quiz").show();
        $("#submit").show();
        $(".avengerAssemble").hide();
        $(".openingSentence").hide();
        //$(".errorMessage").hide(
        
    }

    /*

    function errorMessage() {
        if ($(".errorMessage").show() && totalNumOfQA == myQuestions.length) {
            $(".errorMessage").hide(); 
        }
    } */


    buildQuiz();

    

   






/* TO DO LIST 
- hide the reveal button when showing results 
- hide the error message after all answers have been clicked
- reveal the right and selected wrong answers (green and red)*/