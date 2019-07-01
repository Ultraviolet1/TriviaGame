$(document).ready(function () {

    //Countdown
    var countDown = 60;
    var quizTimer = setInterval(function () {
      countDown--;
      document.getElementById('time').textContent = countDown;
      if (countDown <= 0)
        clearInterval(quizTimer);
    }, 1000)
  
  
  
    //Times up events 
    setTimeout(timeUp, 1000 * 60);
    function timeUp() {
      
      $('body').css('background-image', 'url(./assets/images/world.png)');
      $('.quiz').css('visibility', 'hidden');
      $('.image').css('visibility', 'visible');
    }
  });
  
  //Music ??

  //var themeSong;

  //function start() {
    //themeSong = new sound("Rick and Morty Theme Song [HD].mp3");
  //}


  //Quiz
  (function () {
    function newQuiz() {
      
      var output = [];
  
      //questions
      quizQs.forEach((newQs, qNum) => {
        
        var answers = []
  
        for (ansLetter in newQs.answers) {
          //Add radio button for each answer - Found this snippet on another site and modified. - this was difficult to find
          answers.push(
            `<label>
                <input type="checkbox" name='question${qNum}' value='${ansLetter}'>
                ${ansLetter} :
                ${newQs.answers[ansLetter]}
               </label>`
          );
        }
  
        //Push question and answers to answers array
        output.push(
          `<div class='question'> ${newQs.question} </div>
          <div class='answers'> ${answers.join('')} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join('');
    }
  
    //Track answers
    function showResults() {
      var answerArrays = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      // answers - this kicked my butt
      quizQs.forEach((newQs, qNum) => {
        //This section contains some snippets from other sites that have been combined or modified
        var answerArray = answerArrays[qNum];
        var selector = `input[name=question${qNum}]:checked`;
        var userAnswer = (answerArray.querySelector(selector) || {}).value;
  
        //  CORRECT 
        if (userAnswer === newQs.correctAnswer) {
          numCorrect++;
  
          //Change color
          answerArrays[qNum].style.color = 'green';
        } else {
          answerArrays[qNum].style.color = 'red';
        }
      });
  
      //score
      resultsArray.innerHTML = `${numCorrect} out of ${quizQs.length}`;
    }
  
    //Score

    var quizContainer = document.getElementById("quiz");
    var submitButton = document.getElementById("submit");
    var resultsArray = document.getElementById("results");
    
    // Quiz
    var quizQs = [
      {
        question: "What is Morty's sister's name?",
        answers: {
          a: "Tammy",
          b: "Summer",
          c: "Autumn",
          d: "Beth",
        },
        correctAnswer: "b"
      },
      {
        question: "How do Rick and Morty travel between worlds?",
        answers: {
          a: "Spaceship",
          b: "Warp sword",
          c: "Portal gun",
          d: "Alien technology",
        },
        correctAnswer: "c"
      },
      {
        question: "Who is NOT a parasite?",
        answers: {
          a: "Mr. Poopybutthole",
          b: "Mr. Beauregard",
          c: "Uncle Nicky",
          d: "Photography Raptor",
        },
        correctAnswer: "a"
      },
      {
        question: "Who are the creators of Rick and Morty?",
        answers: {
          a: "Trey Parker and Matt Stone",
          b: "Seth McFarland",
          c: "Rick Sanchez and Morty Smith",
          d: "Justin Roiland and Dan Harmon",
        },
        correctAnswer: "d"
      },
      {
        question: "What is the main character Rick's universe identity number?",
        answers: {
          a: "D-12",
          b: "C-137",
          c: "6",
          d: "C-139",
        },
        correctAnswer: "b"
      },
      {
        question: "What does Rick turn himself into to avoid going to the Psychologist with his family?",
        answers: {
          a: "A gaseous being",
          b: "Bird Person",
          c: "A pickle",
          d: "A teenager",
        },
        correctAnswer: "c"
      }
    ];
  
    //Call function for quiz
    newQuiz();
  
    //Button to display score
    submitButton.addEventListener('click', showResults);
    $(function () {
      $('.image').click(function () {
  
        $('.image').hide();
        $('.image').show();
      });
    })
  })();