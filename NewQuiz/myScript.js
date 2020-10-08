(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    if (numCorrect >= 3) {
      commentContainer.innerHTML = `You are a genious!`;
    } else {
      commentContainer.innerHTML = `You seem to have a bad day!`;
    }
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const commentContainer = document.getElementById("comment");
  const submitButton = document.getElementById("submit");
  var myQuestions = [
    {
      question: "Which HTML attribute is used to define inline styles?",
      answers: {
        a: "class",
        b: "font",
        c: "style",
        d: "styles",
      },
      correctAnswer: "c",
    },
    {
      question: "Which property is used to change the background color?",
      answers: {
        a: "background-color",
        b: "bgcolor",
        c: "color",
        d: "backcolor",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Which property is used to change the left margin of an element?",
      answers: {
        a: "indent",
        b: "margin-left",
        c: "padding-left",
        d: "border-left",
      },
      correctAnswer: "b",
    },
    {
      question: "Inside which HTML elements do we put the java script?",
      answers: {
        a: "javascript",
        b: "js",
        c: "script",
        d: "scripting",
      },
      correctAnswer: "c",
    },
    {
      question: "Which one of these variable types is not primitive? ",
      answers: {
        a: "Object",
        b: "Boolean",
        c: "String",
        d: "Integer",
      },
      correctAnswer: "a",
    },
  ];

  //   Randomizes the questions
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(myQuestions);
  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
