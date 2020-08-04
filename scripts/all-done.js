var renderAllDone = function (score) {

    // Clear the view elements to render new
    emptyView();

    // Create and Append question elements with classes and ids
    var containerDiv = document.createElement("div");
    var nameInput = document.createElement("input");
    var submitBtn = document.createElement("button");
    var msgDiv = document.createElement("div")

    // Add text to elements
    viewTitle.textContent = "All done!";
    intro.textContent = "Your final score is " + score + ".";
    submitBtn.textContent = "Submit";

    // Add attributes to elements
    intro.removeAttribute("data-question");
    containerDiv.setAttribute("class", "centered");
    nameInput.setAttribute("class", "enter-input");
    nameInput.setAttribute("placeholder", "Your name");
    submitBtn.setAttribute("class", "buttons");
    msgDiv.setAttribute("class", "hide")

    // Append to changing view div
    containerDiv.appendChild(nameInput);
    containerDiv.appendChild(submitBtn);
    containerDiv.appendChild(msgDiv)
    changingView.appendChild(containerDiv);

    // EVENT LISTENER
    // Select Submit Button
    submitBtn.addEventListener("click", function () {
        event.preventDefault();

        // Save user name in array
        user = {
            uName: nameInput.value.trim(),
            uScore: score
        }

        // Validate field
        if (user.uName === "") {
            displayMessage("Name cannot be blank");
        } else {
            // Render Highscore *****
            renderHighscore(user);
        }
    })

    // Render validation message
    function displayMessage(message) {
        msgDiv.textContent = message;
        msgDiv.setAttribute("class", "error");
    }
}