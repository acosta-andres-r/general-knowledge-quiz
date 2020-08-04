function renderQuestions() {

    questions = [
        { // First Question
            question: "How many legs does a dog have?",
            choice1: "1",
            choice2: "2",
            choice3: "3",
            choice4: "4", // Answer
            answer: "4"
        },
        { // Second Question
            question: "When did the first human step on the moon?",
            choice1: "1960",
            choice2: "1969", // Answer
            choice3: "1979",
            choice4: "1980",
            answer: "2"
        },
        { // Third Question
            question: "How many bits are ther in 1 bite?",
            choice1: "4",
            choice2: "8", // Answer
            choice3: "16",
            choice4: "13",
            answer: "2"
        },
        { // Forth Question
            question: "When did the World War II begin?",
            choice1: "1925",
            choice2: "1939", // Answer
            choice3: "1944",
            choice4: "1948",
            answer: "2"
        },
        { // Fifth Question
            question: "Who was the first human to travel to the moon?",
            choice1: "Opra Winfrey",
            choice2: "Barack Obama",
            choice3: "Steve Jobs",
            choice4: "Neil Armstrong", // Answer
            answer: "4"
        },
        { // Sixth Question
            question: "How long did the World War II last?",
            choice1: "2 years",
            choice2: "4 years",
            choice3: "6 years", // Answer
            choice4: "8 years",
            answer: "3"
        },

    ]

    // Clear the view elements to render new
    emptyView();

    // Create and Append question elements with classes and ids
    var count = document.createElement("span"); // span-count
    var timer = document.createElement("div"); // div-timer
    var number = document.createElement("span");
    var olEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    var questionIterator = 0; // Actual question - 1
    var secondsLeft = 20;

    // Modify new elements
    count.setAttribute("id", "count");
    timer.setAttribute("id", "timer");
    li1.setAttribute("class", "choices mouseOver");
    li2.setAttribute("class", "choices mouseOver");
    li3.setAttribute("class", "choices mouseOver");
    li4.setAttribute("class", "choices mouseOver");

    timer.textContent = "Timer: ";
    count.textContent = "00";
    viewTitle.textContent = "Question #";

    // Append new elements
    timer.appendChild(count)
    viewHeader.appendChild(timer);
    viewTitle.appendChild(number);
    olEl.appendChild(li1);
    olEl.appendChild(li2);
    olEl.appendChild(li3);
    olEl.appendChild(li4);
    changingView.appendChild(olEl);

    // SUB FUNCTIONS
    function showNextQuestion(i) {
        number.textContent = i + 1;
        intro.textContent = questions[i].question;
        li1.textContent = questions[i]["choice" + 1];
        li2.textContent = questions[i]["choice" + 2];
        li3.textContent = questions[i]["choice" + 3];
        li4.textContent = questions[i]["choice" + 4];

        intro.setAttribute("data-question", i + 1);
        li1.setAttribute("data-choice", 1);
        li2.setAttribute("data-choice", 2);
        li3.setAttribute("data-choice", 3);
        li4.setAttribute("data-choice", 4);

        i++;
        return i;
    }

    function stopTimerToRenderAllDone() {

        clearInterval(timerInterval);
        // Render All Done
        renderAllDone(secondsLeft);
    }


    // EVENT LISTENER
    // Select choices li elements to compare with answers
    var choicesEl = document.querySelectorAll(".choices")

    // Assign "Click" event to each choice li element
    for (var i = 0; i < choicesEl.length; i++) {

        choicesEl[i].addEventListener("click", function (event) {
            event.preventDefault();

            var userChoice = event.target.getAttribute("data-choice");
            var questionNumber = intro.getAttribute("data-question");
            var correctAnswer = questions[questionNumber - 1].answer;

            if (userChoice === correctAnswer) {
                // IMPORTANT: This code is when user clicks on answer
                if (questionIterator < questions.length) {
                    secondsLeft = secondsLeft + 10;
                    count.textContent = secondsLeft + 1;

                    questionIterator = showNextQuestion(questionIterator);
                } else {

                    stopTimerToRenderAllDone();
                }

            } else {
                secondsLeft = secondsLeft - 5;
                count.textContent = secondsLeft + 1;

                // Animation in wrong answer
                var animationStart = 0
                var animationInterval = setInterval(function () {
                    event.target.classList.remove("mouseOver");
                    
                    animationStart++;

                    if(animationStart < 9) {
                        var animationNumber = (animationStart % 4) + 1;
                        event.target.setAttribute("class", "choices rotate" + animationNumber);

                    } else {
                        event.target.setAttribute("class", "choices mouseOver");
                        clearInterval(animationInterval);
                    }

                }, 50)
            }
        })
    }


    //RUN FUNCTIONS:
    // Display first question
    questionIterator = showNextQuestion(questionIterator);

    // START: Run timer
    var timerInterval = setInterval(function () {

        if (secondsLeft <= 0) {
            count.textContent = "00";

            stopTimerToRenderAllDone()
        }

        count.textContent = secondsLeft;
        secondsLeft--;
    }, 1000);
}