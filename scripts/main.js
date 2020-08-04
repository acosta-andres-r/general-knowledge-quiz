// Elements to clear
var viewHeader = document.querySelector("#view-header")
var viewTitle = document.querySelector("#view-title");
var intro = document.querySelector("#intro-p");
var changingView = document.querySelector("#changing-view");
var user = {};

// Empty viewHeader, changingView
function emptyView() {
    viewHeader.innerHTML = "";
    viewTitle.innerHTML = "";
    intro.textContent = "";
    changingView.innerHTML = "";
}

// Start any View by emptying the view elements
emptyView();

// Create and Append Start elements with attributes
var starBtnContainer = document.createElement("div");
var starBtn = document.createElement("button");

viewTitle.textContent = "General Knowledge Quiz"
intro.textContent = "This easy quiz was created to put your knowledge to the test. Answer the questions within the time frame. You lose 5 seconds every time you choose an incorrect answer."
starBtn.textContent = "Start Quiz!"

starBtnContainer.setAttribute("class", "centered");
starBtn.setAttribute("class", "buttons center-elem");

starBtnContainer.appendChild(starBtn);
changingView.appendChild(starBtnContainer);


starBtn.addEventListener("click", function () {
    // Render Questions
    renderQuestions();
})

