/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
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
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Which Indian Standard (IS) code is adopted for determination of the strength of hardened concrete.", ///// Write the question inside double quotes
            answers: {
                a: "IS 456", ///// Write the option 1 inside double quotes
                b: "IS 10262", ///// Write the option 2 inside double quotes
                c: "IS 516", ///// Write the option 1 inside double quotes
                d: "IS 1199", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "2. Out of the following which apparatus is required for the determination of the strength of hardened concrete?", ///// Write the question inside double quotes
            answers: {
                a: "CTM", ///// Write the option 1 inside double quotes
                b: "UTM", ///// Write the option 2 inside double quotes
                c: "VICAT", ///// Write the option 1 inside double quotes
                d: "LE CHATLIER", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "3. What are the recognized ages of the test specimen at the time of the test (in days)?", ///// Write the question inside double quotes
            answers: {
                a: "1,7,28,56,90", ///// Write the option 1 inside double quotes
                b: "1,7,20,56,90", ///// Write the option 2 inside double quotes
                c: "1,7,28,50,90", ///// Write the option 1 inside double quotes
                d: "1,7,28,56,97", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "4. What is the recognized shape and dimension of the cube specimen at the time of the test. In mm.", ///// Write the question inside double quotes
            answers: {
                a: "100X100 OR 150X150", ///// Write the option 1 inside double quotes
                b: "150X200", ///// Write the option 2 inside double quotes
                c: "200X200", ///// Write the option 1 inside double quotes
                d: "150X250", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "5. Select the minimum number of the specimen to be tested at the time of the test.", ///// Write the question inside double quotes
            answers: {
                a: "4", ///// Write the option 1 inside double quotes
                b: "3", ///// Write the option 2 inside double quotes
                c: "5", ///// Write the option 1 inside double quotes
                d: "6", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "6. What is the rate of loading for a 150mm specimen in KN /sec?", ///// Write the question inside double quotes
            answers: {
                a: "5.25", ///// Write the option 1 inside double quotes
                b: "2.33", ///// Write the option 2 inside double quotes
                c: "4.66", ///// Write the option 1 inside double quotes
                d: "5.75", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },         

        {
            question: "7. How to calculate the compressive strength of the specimen?", ///// Write the question inside double quotes
            answers: {
                a: "peak load / cross-sectional area", ///// Write the option 1 inside double quotes
                b: "peak strain / cross-sectional area", ///// Write the option 2 inside double quotes
                c: "peak stress / cross-sectional area", ///// Write the option 1 inside double quotes
                d: "volume / cross-sectional area", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },
    // {
    //   question: "<img src='images/8.PNG'><br>Identify the location of Secondary electron detector",  ///// Write the question inside double quotes
    //   answers: {
    //     a: "<img src='images/1b.png'>",                  ///// Write the option 1 inside double quotes
    //     b: "<img src='images/1a.png'>",                  ///// Write the option 2 inside double quotes
    //     c: "<img src='images/1c.PNG'>",      },
    //   correctAnswer: "c"                ///// Write the correct option inside double quotes
    // },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
