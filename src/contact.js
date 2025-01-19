export default () => {

    // I could have used helper functions for this but I decided to get good at selecting things on the dom

    const content = document.querySelector(".content");

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const signupForm = document.createElement("div");
    signupForm.classList.add("signup-form");

    const fieldset = document.createElement("fieldset");

    const legend = document.createElement("legend");
    legend.textContent = "Help us keep in contact";
    fieldset.appendChild(legend);

    const form = document.createElement("form");
    form.setAttribute("action", "#");

    const firstNameDiv = document.createElement("div");
    const firstNameLabel = document.createElement("label");
    firstNameLabel.setAttribute("for", "firstName");
    firstNameLabel.textContent = "First Name";
    firstNameDiv.appendChild(firstNameLabel);
    firstNameDiv.appendChild(document.createElement("br"));
    const firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("type", "text");
    firstNameInput.setAttribute("name", "firstName");
    firstNameInput.setAttribute("id", "firstName");
    firstNameInput.required = true;
    firstNameDiv.appendChild(firstNameInput);
    firstNameDiv.appendChild(document.createElement("br"));
    form.appendChild(firstNameDiv);

    const lastNameDiv = document.createElement("div");
    const lastNameLabel = document.createElement("label");
    lastNameLabel.setAttribute("for", "lastName");
    lastNameLabel.textContent = "Last Name";
    lastNameDiv.appendChild(lastNameLabel);
    lastNameDiv.appendChild(document.createElement("br"));
    const lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("name", "lastName");
    lastNameInput.setAttribute("id", "lastName");
    lastNameInput.required = true;
    lastNameDiv.appendChild(lastNameInput);
    lastNameDiv.appendChild(document.createElement("br"));
    form.appendChild(lastNameDiv);

    const emailDiv = document.createElement("div");
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email";
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(document.createElement("br"));
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("id", "email");
    emailInput.required = true;
    emailDiv.appendChild(emailInput);
    emailDiv.appendChild(document.createElement("br"));
    form.appendChild(emailDiv);

    const phoneDiv = document.createElement("div");
    const phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "phone");
    phoneLabel.textContent = "Phone Number";
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(document.createElement("br"));
    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("name", "phone");
    phoneInput.setAttribute("id", "phone");
    phoneInput.setAttribute("maxlength", "10");
    phoneInput.setAttribute("pattern", "[0-9]{10}");
    phoneInput.required = true;
    phoneDiv.appendChild(phoneInput);
    phoneDiv.appendChild(document.createElement("br"));
    form.appendChild(phoneDiv);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Form submission prevented.");
    });
    form.appendChild(submitButton);

    fieldset.appendChild(form);

    signupForm.appendChild(fieldset);

    pageContent.appendChild(signupForm);

    content.appendChild(pageContent);
};





/* <div class="page-content">xxx
            <div class="signup-form">
                <fieldset>
                    <legend>Help us keep in contact</legend>
                     <form action="#" method=""> <!--removing post because cant be bothered to prevent default -->
                        <div>
                            <label for="firstName">First Name</label><br>
                            <input type="text" name="firstName" id="firstName" required><br>
                        </div>
                        <div>
                            <label for="lastName">Last Name</label><br>
                            <input type="text" name="lastName" id="lastName" required><br>
                        </div>
                        <div>
                            <label for="email">Email</label><br>
                            <input type="email" name="email" id="email" required><br>
                        </div>
                        <div>
                            <label for="phone">Phone Number</label><br>
                            <input type="tel" name="phone" id="phone" maxlength="10" pattern="[0-9]{10}" required><br>
                        </div>
                        <button type="submit">submit</button>
                    </form>
                </fieldset>
            </div>
        </div> */