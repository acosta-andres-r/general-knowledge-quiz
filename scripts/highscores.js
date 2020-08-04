var renderHighscore = function () {

    var userArray = [];

    // Clear the view elements to render new
    emptyView();

    // Create and Append Highscore elements with attributes 
    var tableEl = document.createElement("table");
    var theadEl = document.createElement("thead");
    var tbodyEl = document.createElement("tbody");
    var trHeaderEl = document.createElement("tr");
    var thNameEl = document.createElement("th");
    var thScoreEl = document.createElement("th");
    var trEmptyEl = document.createElement("tr");
    var tdEmptyNameEl = document.createElement("td");
    var tdEmptyScoreEl = document.createElement("td");
    var btnContainer = document.createElement("div");
    var backBtn = document.createElement("button");
    var clearBtn = document.createElement("button");

    viewTitle.textContent = "Highscores";
    intro.textContent = "The greatest player of all time!";

    thNameEl.textContent = "NAME";
    thScoreEl.textContent = "SCORE";
    tdEmptyNameEl.textContent = "--";
    tdEmptyScoreEl.textContent = "--";
    backBtn.textContent = "Back";
    clearBtn.textContent = "Clear";

    backBtn.setAttribute("class", "buttons");
    clearBtn.setAttribute("class", "buttons");
    btnContainer.setAttribute("class", "centered");

    trHeaderEl.appendChild(thNameEl);
    trHeaderEl.appendChild(thScoreEl);
    theadEl.appendChild(trHeaderEl);
    trEmptyEl.appendChild(tdEmptyNameEl);
    trEmptyEl.appendChild(tdEmptyScoreEl);
    tbodyEl.appendChild(trEmptyEl);
    tableEl.appendChild(theadEl);
    tableEl.appendChild(tbodyEl);
    btnContainer.appendChild(backBtn);
    btnContainer.appendChild(clearBtn);
    changingView.appendChild(tableEl);
    changingView.appendChild(btnContainer);

    // SUB FUNCTIONS
    function clearUsersFromTable() {

        tbodyEl.innerHTML = ""

        tdEmptyNameEl.textContent = "--";
        tdEmptyScoreEl.textContent = "--";

        trEmptyEl.appendChild(tdEmptyNameEl);
        trEmptyEl.appendChild(tdEmptyScoreEl);
        tbodyEl.appendChild(trEmptyEl);

        console.log(tdEmptyNameEl.textContent)
    }

    function initUserArray() {

        var storedUsers = JSON.parse(localStorage.getItem("users"));

        if (storedUsers !== null) {

            userArray = storedUsers;

            // Find raking position of user depending on score
            var i = -1;
            do {
                i++;
                if (i >= userArray.length) {
                    savedScore = user.uScore - 1; // To exit the loop
                } else {
                    savedScore = userArray[i].uScore
                }
            }  while (user.uScore < savedScore) 
            
            // Add new user to array
            userArray.splice(i, 0, user)
            // Save userArray in local storage
            storeUsers();

        } else {
            // Add user to array
            userArray.push(user);
            // Save userArray in local storage
            storeUsers();
        }

        // Render Users inside tbody tag
        renderUsers();
    }

    function storeUsers() {

        localStorage.setItem("users", JSON.stringify(userArray));
    }

    function renderUsers() {
        // Clear Table body
        tbodyEl.innerHTML = "";

        for (var i = 0; i < userArray.length; i++) {

            // Create elements 
            var tdNameEl = document.createElement("td")
            var tdScoreEl = document.createElement("td")
            var trEl = document.createElement("tr")
            
            // Add context to td tags
            tdNameEl.textContent = userArray[i].uName;
            tdScoreEl.textContent = userArray[i].uScore;
            
            // Append to tbody element
            trEl.appendChild(tdNameEl)
            trEl.appendChild(tdScoreEl)
            tbodyEl.appendChild(trEl)
        }
    }

    // EVENT LISTENERS
    clearBtn.addEventListener("click", function () {
        event.preventDefault();

        clearUsersFromTable();

        // Empty local storage
        localStorage.clear();
    })

    // RUN FUNCTION:
    // Get Local Storage info or create new
    initUserArray();

}